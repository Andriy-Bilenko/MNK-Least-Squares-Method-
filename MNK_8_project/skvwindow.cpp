#include "skvwindow.h"
#include "ui_skvwindow.h"
#include "student_coeffs.hpp"
#include <vector>
#include <sstream>
#include <string>
#include <cmath>
#include <algorithm>
#include <QCloseEvent>
#include <QMessageBox>
#include <QResizeEvent>
#include <QPalette>
#include <QTranslator>
#include "exceptions.hpp"
#include "helpingFunctions.hpp"

SkvWindow::SkvWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::SkvWindow)
{
    ui->setupUi(this);
    setAttribute(Qt::WA_DeleteOnClose);
    //populating combobox:
    for(int i = 0; i < CONFIDENCE_INTERVALS_NUMBER; ++i){
        QString confidence_interval = QString::number(confidence_intervals[i]) + "%";
        ui->comboBoxConfidenceInterval->addItem(confidence_interval);
    }
    ui->comboBoxConfidenceInterval->setStyleSheet("combobox-popup: 0;");
    ui->comboBoxConfidenceInterval->setCurrentIndex(3);
    //for red exit button:
    QPalette Pal(palette());
    Pal.setColor(QPalette::Button, QColor(33,0,0));
    ui->exitButton->setAutoFillBackground(true);
    ui->exitButton->setPalette(Pal);
    //textEdit prompt:
    ui->textEdit->setPlaceholderText("12.94567\n13.00012\n12.99233\n. . . . .");
    //connecting
    connect(ui->pushButton, &QPushButton::clicked, this, &SkvWindow::calculateClicked);
    connect(ui->exitButton, &QPushButton::clicked, this, &SkvWindow::exitClicked);
    ui->tipsLabel->setTextInteractionFlags(Qt::TextSelectableByMouse);
    ui->tipsLabel->setFrameShape(QFrame::StyledPanel);
    ui->tipsLabel->setTextFormat(Qt::RichText);
    ui->tipsLabel->setTextInteractionFlags(Qt::TextBrowserInteraction);
    ui->tipsLabel->setOpenExternalLinks(true);
    ui->tipsLabel->setText(tr("[Student's coefficient / t-value]<br/>"
                           "It is recommended to visit <a href=\"https://www.scribbr.com/statistics/students-t-table/\">the guide</a><br/>"
                              "For more see HELP pane or optionally visit <a href=\"https://en.wikipedia.org/wiki/Student%27s_t-distribution\">Wikipedia</a>"));
    QPalette pal = QPalette();
    pal.setColor(QPalette::Window, 0x46342F);
    pal.setColor(QPalette::WindowText, 0xD69E56);
    ui->tipWidget->setAutoFillBackground(true);
    ui->tipWidget->setPalette(pal);
    ui->label_2->setAttribute(Qt::WA_Hover);
    ui->label_2->installEventFilter(this);
    ui->tipWidget->setAttribute(Qt::WA_Hover);
    ui->tipWidget->installEventFilter(this);
    ui->label_2->setStyleSheet("border-style: solid; border-color: rgb(0,0,0); border-width: 2px; border-radius: 20px;");
    ui->tipWidget->hide();
}

SkvWindow::~SkvWindow()
{
    delete ui;
}

int SkvWindow::calculateClicked()
{
    std::vector<double> data{};
    double avg{};
    double avg_err{};
    double student_coeff{};
    double min{};
    double max{};
    double median{};
    double confidence_interval{};
    if((read(data, confidence_interval)) || (calculate(data, confidence_interval, avg, avg_err, student_coeff, min, max, median))){
        return -1;//with errors
    }
    QString result = QString::number(avg) + " ± " + QString::number(avg_err);
    ui->resultLabel->setText(result);
    ui->countLabel->setText(QString::number(data.size()));
    ui->medianLabel->setText(QString::number(median));
    QString range =  QString::number(min) + " <-> " + QString::number(max);
    ui->rangeLabel->setText(range);
    ui->studentCoeffLabel->setText(QString::number(student_coeff));
    return 0;
}

void SkvWindow::exitClicked()
{
    close();
}

bool SkvWindow::eventFilter(QObject *obj, QEvent *ev)
{
    if ((ev->type() == QEvent::HoverEnter) && (obj == ui->label_2))
    {
        //setting beneath label_2:
        ui->tipWidget->setGeometry(ui->label_2->x(),(ui->label_2->y() + ui->label_2->height()),ui->tipWidget->width(),ui->tipWidget->height());
        ui->tipWidget->show();
        isLabelFocused = true;
        return true;
    }
    if ((ev->type() == QEvent::HoverEnter) && (obj == ui->tipWidget))
    {
        isTipFocused = true;
        //setting beneath label_2:
        ui->tipWidget->setGeometry(ui->label_2->x(),(ui->label_2->y() + ui->label_2->height()),ui->tipWidget->width(),ui->tipWidget->height());
        ui->tipWidget->show();
        return true;
    }
    if ((ev->type() == QEvent::HoverLeave))
    {
        if(obj == ui->tipWidget){
            isTipFocused = false;
        }
        if(obj == ui->label_2){
            isLabelFocused = false;
        }

        if(!isLabelFocused && !isTipFocused){
            ui->tipWidget->hide();
        }
        return true;
    }
    return false;
}

void SkvWindow::resizeEvent(QResizeEvent *event)
{
    int w = this->width();
    int h = this->height();
    int offset = 20;//offset for buttons, otherwise they are half-hidden
    ui->mainWidget->setGeometry(0, 0, w - offset, h - offset);
    event->accept();
}

void SkvWindow::closeEvent(QCloseEvent *event)
{
    emit closes();
    event->accept();
}

int SkvWindow::read(std::vector<double> &input, double& confidence_interval)
{
    input.clear();
    QString qtext = ui->textEdit->toPlainText();
    QTextStream ts (&qtext);
    QString tmp {""};
    while(!ts.atEnd()){
        try{
            ts >> tmp;
            if(tmp.toStdString().find_first_not_of(' ') != std::string::npos)
            {//not empty (not only spaces)
                input.push_back(getNumberFromQString(tmp));
            }
        }catch(const std::exception& ex){
            QMessageBox::critical(this, tr("ERROR"), tr(ex.what()));
            return -1;//end of function execution
        }
    }
    //getting confidence interval number from combobox:
    std::string confidence_interval_string = ui->comboBoxConfidenceInterval->currentText().toStdString();
    confidence_interval_string = confidence_interval_string.substr(0, confidence_interval_string.size() - 1);
    confidence_interval = std::stod(confidence_interval_string);
    return 0;
}

int SkvWindow::calculate(const std::vector<double> data, const double confidence_interval, double &avg, double &avg_err, double &student, double& min, double& max, double& median)
{
    std::vector<double> input = data;//copying because it will be sorted
    int inputsize = (int)input.size();
    if(inputsize < 2){
        QString errormessage = tr("there should be at least 2 input points.\n(nothing will be calculated)");
        QMessageBox::critical(this, tr("ERROR"), errormessage);
        return -1;
    }
    std::sort(input.begin(), input.end());
    min = input.at(0);
    max = input.at(inputsize-1);
    if(inputsize % 2){
        median = input.at(inputsize/(int)2);
    }else{
        median = (input.at(inputsize/2) + input.at(inputsize/2-1))/2.0;
    }
    double sum{};
    for(int i = 0; i < inputsize; ++i){
        sum += input.at(i);
    }
    avg = sum/(double)inputsize;
    size_t student_coeff_confidence_index = 0;
    for(;student_coeff_confidence_index < CONFIDENCE_INTERVALS_NUMBER; student_coeff_confidence_index++){
        if(confidence_intervals[student_coeff_confidence_index] == confidence_interval){
            break;//we've chosen the index in student coeff array (for which confidence interval to choose the Student's coefficient)
        }
    }
    if(inputsize < (30 + 1)){
        student = student_coeffs[student_coeff_confidence_index][inputsize-2];
    }else if(inputsize < (40 + 1)){
        student = student_coeffs[student_coeff_confidence_index][(30 - 1)];
    }else if(inputsize < (50 + 1)){
        student = student_coeffs[student_coeff_confidence_index][30];
    }else if(inputsize < (60 + 1)){
        student = student_coeffs[student_coeff_confidence_index][(30 + 1)];
    }else if(inputsize < (70 + 1)){
        student = student_coeffs[student_coeff_confidence_index][(30 + 2)];
    }else if(inputsize < (80 + 1)){
        student = student_coeffs[student_coeff_confidence_index][(30 + 3)];
    }else if(inputsize < (100 + 1)){
        student = student_coeffs[student_coeff_confidence_index][(30 + 4)];
    }else if(inputsize < (1000 + 1)){
        student = student_coeffs[student_coeff_confidence_index][(30 + 5)];
    }else{
        student = student_coeffs[student_coeff_confidence_index][(30 + 6)];
    }
    double sum_dev_squares{};
    for(int i = 0; i < inputsize; ++i){
        sum_dev_squares += (avg - input.at(i))*(avg - input.at(i));
    }
    double delim = inputsize*(inputsize -1);
    avg_err = student * std::sqrt(sum_dev_squares/(double)delim);
    return 0;
}
