#ifndef HELPINGFUNCTIONS_HPP
#define HELPINGFUNCTIONS_HPP
#include <QString>


/// \brief getNumberFromQString()
/// accepts '.' and ',' in number, does not accept anything else except numbers
/// (is a better alternative to std::stold)
/// \param input - string to be converted
/// \return long double converted number
long double getNumberFromQString(QString input);



#endif // HELPINGFUNCTIONS_HPP
