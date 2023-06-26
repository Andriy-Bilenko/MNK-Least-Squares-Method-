#include <QString>
#include <algorithm>
#include <string>
#include <sstream>
#include <QTranslator>
#include <QObject>
#include "exceptions.hpp"

long double getNumberFromQString(QString input)
{
    std::string stdInput = input.toStdString();
    std::replace(stdInput.begin(), stdInput.end(), ',', '.');//allowing both "." and ","
    size_t ePos = stdInput.find_first_of("eE");//scientific notation = invalid (for less confusion)
    if (!(ePos == std::string::npos)) {
        throw InvalidData(QObject::tr("error reading number: ") + input);
    }
    std::istringstream iss(stdInput);
    long double number;
    char remaining;
    if ((iss >> number) && !(iss >> remaining)) {
        return number;
    }
    throw InvalidData(QObject::tr("error reading number: ") + input);
}
