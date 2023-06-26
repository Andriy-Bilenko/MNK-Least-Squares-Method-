#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QMessageBox>
#include <QApplication>
#include "helpdialog.h"
#include <QTranslator>


MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    this->setWindowTitle("welcome");
    //for red exit button:
    QPalette Pal(palette());
    Pal.setColor(QPalette::Button, QColor(53,0,0));
    ui->exitButton->setAutoFillBackground(true);
    ui->exitButton->setPalette(Pal);
    //populating the language combobox:
    ui->comboBoxLanguage->setStyleSheet("combobox-popup: 0;");
    ui->comboBoxLanguage->addItem("EN");
    ui->comboBoxLanguage->addItem("UA");
    //connecting:
    connect(ui->mnkButton, &QPushButton::clicked, this, &MainWindow::mnkClicked);
    connect(ui->skvButton, &QPushButton::clicked, this, &MainWindow::skvClicked);
    connect(ui->helpButton, &QPushButton::clicked, this, &MainWindow::helpClicked);
    connect(ui->exitButton, &QPushButton::clicked, this, &MainWindow::exitClicked);
    connect(ui->comboBoxLanguage, &QComboBox::currentIndexChanged, this, &MainWindow::translateFunction);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::mnkClicked()
{
    m_mnkWindow = new MnkWindow();//not a child by the matter of fact, but treated as such, deletes on close
    connect(m_mnkWindow, SIGNAL(closes()), this, SLOT(recieveChildClosed()));
    m_mnkWindow->setWindowFlags(m_mnkWindow->windowFlags() | Qt::Window);
    m_mnkWindow->show();
    hide();
}

void MainWindow::skvClicked()
{
    m_skvWindow = new SkvWindow();//not a child by the matter of fact, but treated as such, deletes on close
    connect(m_skvWindow, SIGNAL(closes()), this, SLOT(recieveChildClosed()));
    m_skvWindow->setWindowFlags(m_skvWindow->windowFlags() | Qt::Window);
    m_skvWindow->show();
    hide();
}

void MainWindow::helpClicked()
{
    m_helpDialog = new HelpDialog();//not a child by the matter of fact, but treated as such, deletes on close
    connect(m_helpDialog, SIGNAL(closes()), this, SLOT(recieveChildClosed()));
    m_helpDialog->setWindowFlags(m_helpDialog->windowFlags() | Qt::Window);
    m_helpDialog->show();
    hide();

}

void MainWindow::exitClicked()
{
    QCoreApplication::quit();//exiting whole app
}

void MainWindow::recieveChildClosed()
{
    this->show();
}

void MainWindow::translateFunction()
{
    if(ui->comboBoxLanguage->currentText() == "UA"){
        if(!m_translator){
            m_translator = new QTranslator(this);
            if(!m_translator->load("translations/custom_uk-UA.qm")){
                QMessageBox::critical(this, tr("ERROR"), tr("error translating."));
                return;
            }
        }
        if(!m_systemTranslator){
            m_systemTranslator = new QTranslator(this);
            if(!m_systemTranslator->load("translations/qtbase_uk.qm")){
                QMessageBox::critical(this, tr("ERROR"), tr("error translating."));
                return;
            }
        }
        qApp->installTranslator(m_translator);
        qApp->installTranslator(m_systemTranslator);
        ui->mnkButton->setText("МНК");//current widget texts don't load for some reason
        ui->skvButton->setText("СКВ");
        ui->helpButton->setText("ДОПОМОГА");
        ui->exitButton->setText("ВИЙТИ");
        this->setWindowTitle("вітаємо");
    }else{
        qApp->removeTranslator(m_translator);
        qApp->removeTranslator(m_systemTranslator);
        ui->mnkButton->setText("MNK");
        ui->skvButton->setText("SKV");
        ui->helpButton->setText("HELP");
        ui->exitButton->setText("EXIT");
        this->setWindowTitle("welcome");
    }
}
