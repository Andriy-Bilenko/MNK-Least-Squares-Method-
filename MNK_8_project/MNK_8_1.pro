QT       += core gui charts

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets printsupport

CONFIG += c++17
#by me
QMAKE_CXXFLAGS += -Wa,-mbig-obj
#end


# You can make your code fail to compile if it uses deprecated APIs.
# In order to do so, uncomment the following line.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

# Tell the qcustomplot header that it will be used as library:
DEFINES += QCUSTOMPLOT_USE_LIBRARY

# Link with debug version of qcustomplot if compiling in debug mode, else with release library:
CONFIG(debug, release|debug) {
  win32:QCPLIB = qcustomplotd2
  else: QCPLIB = qcustomplotd
} else {
  win32:QCPLIB = qcustomplot2
  else: QCPLIB = qcustomplot
}
LIBS += -L./ -l$$QCPLIB

SOURCES += \
    helpdialog.cpp \
    helpingFunctions.cpp \
    main.cpp \
    mainwindow.cpp \
    mnk.cpp \
    mnkwindow.cpp \
    skvwindow.cpp

HEADERS += \
    exceptions.hpp \
    helpdialog.h \
    helpingFunctions.hpp \
    mainwindow.h \
    mnk.hpp \
    mnkwindow.h \
    skvwindow.h \
    student_coeffs.hpp

FORMS += \
    helpdialog.ui \
    mainwindow.ui \
    mnkwindow.ui \
    skvwindow.ui

# Default rules for deployment.
qnx: target.path = /tmp/$${TARGET}/bin
else: unix:!android: target.path = /opt/$${TARGET}/bin
!isEmpty(target.path): INSTALLS += target

RESOURCES +=


