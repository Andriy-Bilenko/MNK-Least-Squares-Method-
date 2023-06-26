<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="uk_UA">
<context>
    <name>HelpDialog</name>
    <message>
        <location filename="helpdialog.ui" line="20"/>
        <source>HELP</source>
        <translation>ДОПОМОГА</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="66"/>
        <source>MNK:</source>
        <translation>МНК:</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="83"/>
        <location filename="helpdialog.ui" line="219"/>
        <source>What it is:</source>
        <translation>Що це:</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="95"/>
        <source>MNK is a data visualization program, that takes in data points, linearizes them and outputs the &quot;equation&quot; of the linear fit (line&apos;s equation is: y = slope * x + intercept).</source>
        <translation>MНK - це програма візуалізації даних, яка приймає на вхід іксову та ігрекову координати експериментальних точок, лінеаризує цю залежність та видає &quot;рівняння&quot; апроксимації (рівняння прямої: y = slope * x + intercept).</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="107"/>
        <source>Works using Least Squares Method (MNK in Ukrainian, that&apos;s where its title came from).</source>
        <translation>Працює за Методом Найменших Квадратів (звідси і пішла назва).</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="121"/>
        <location filename="helpdialog.ui" line="253"/>
        <source>Usage:</source>
        <translation>Використання:</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="133"/>
        <source>input data points (x values in X column, y values - y column)(specifying names and units of X and Y variables is not mandatory). Also specify error values for each of them (either no errors, fixed errors (will then need to specify them in the fields below) or error for every point individulally) and press &quot;FIT&quot; button to see the linearization.
You can open existing csv files or save newly created (Just see the menubar on the upper left) and also you can take a creenshot of results and save it as .png file to share as a photo (see the Tools option on the menubar) as well as can change the theme of the MNK app (some works may require a light theme).</source>
        <translation>введіть координати експериментальних точок (іксові складові в колонку Х, ігрекові в У)(уточнювати назви та одиниці не обов&apos;язково). Також установіть значення похибок для даних (без похибок, з фіксованими похибками (тоді потрібно ввести числа в полях нижче) або похибки для кожної точки окремо) та натисніть &quot;АПРОКСИМУВАТИ&quot; щоб отримати результат.
Ви можете відкрити існуючі csv файли або зберегти щойно створені (див. панель меню зліва зверху, &quot;Файл&quot;), також ви можете зробити скріншот результатів та зберегти як png, щоб поділитися з іншими (див. опція &quot;Інструменти&quot;). Додатково можна змінити тему програми (деякі роботи можуть вимагати світлу тему)(див. опція &quot;Вигляд&quot;).</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="148"/>
        <source>Additional info:</source>
        <translation>Додаткова інформація:</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="160"/>
        <source>    If it says &quot;file couldn&apos;t be opened&quot;:
Please check if the file is not set as hidden it in its properties in the filebrowser.

    If it says &quot;slope is equal to zero. Data points form a vertical line&quot;:
It means that it is not a main goal of MNK to work linearizing &quot;vertical&quot; data sets and normally data would be considered invalid.

    If it says &quot;corrupt data&quot;:
It could mean that the file went through unauthorized changes (beyond the program) and you will need either to give it up or to try manually extract data from it (using wordpad for example by comparing to the valid files)
It could also mean that the bug was found (if you&apos;re sure something is wrong please report the bug using contact info at the end of the page).

New rows appear by themselves when you focus on the last row (implemented for convenience).
You can use use both variations of real number&apos;s point (comma{,} or dot{.}) when filling the table (same actually goes for numbers in SKV).
You can access some hints regarding errors by focusing on the &quot;?&quot; signs to the right of them.

Example of a working program:</source>
        <translation>    Якщо у відповідь &quot;файл не вдалося відкрити&quot;:
Будь ласка, перевірте, чи файл не встановлено як прихований в його властивостях у вашому файловому менеджері.

Якщо у відповідь &quot;slope дорівнює нулю. Точкові дані формують вертикальну пряму&quot;:
Це означає, що іксові складові всіх точок однакові і такі дані вважаються некоректними (їх обробка не є головною ціллю даної програми).

Якщо у відповідь &quot;пошкоджені дані&quot;:
Це може означати що файл було несанкціоновано змінено (поза програмою) та доведеться або позбутися файлу, або спробувати вручну дістати дані з нього якщо це ще можливо (використовуючи, наприклад, wordpad і порівнюючи з працюючими файлами)
Це також може означати що ви знайшли баг у програмі (якщо ви впевнені, що щось не так, будь ласка, повідомте. Контактні дані в кінці сторінки).

Приклад працюючої програми:</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="186"/>
        <source>{error displaying photo}</source>
        <translation>{помилка завантаження зображення}</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="200"/>
        <source>

SKV</source>
        <translation>

СКВ</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="231"/>
        <source>SKV is a simple data analysis program that calculates the mean and error (also provides some other output such as median, range of data, number of observations and Student&apos;s coefficient chosen by user (95% confidence interval or 0.05 significance level by default)).
    formula for error:</source>
        <translation>СКВ - це проста програма, що рахує середнє арифметичне та середню квадратичну похибку (також передбачає визначення медіанного значення, інтервалу спостережень, кількості спостережень та коефіцієнта Стюдента вибраного користувачем (довірчий інтервал 95% або рівень значущості 0.05 за замовчуванням)).
    формула для похибки:</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="239"/>
        <source>{error displaying formula}</source>
        <translation>{помилка відображення формули}</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="265"/>
        <source>Input numbers (preferrably one per line), choose the confidence interval and press calculate.
Data requirements: there should be only numbers, number count should not be less than 2.

    ||Note: feel free to focus your mouse tip on the &quot;𝜏&quot; to see some detail&apos;s.
 </source>
        <translation>Введіть числа (краще в стовпчик), виберіть довірчий інтервал та натисніть &quot;ОБРАХУВАТИ&quot;.
Вимоги до даних: вони мають містити лише числа, кількість чисел не має бути меншою за 2.
     ||Зауважте: при наведенні мишкою на &quot;𝜏&quot; відобразяться певні деталі.
 </translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="281"/>
        <source>We use critical values of 𝜏 for 2-tailed tests:    (taken from &lt;a href=&quot;https://www.scribbr.com/&quot;&gt;scribbr.com&lt;/a&gt;)</source>
        <translation>Використовуються значення коефіцієнта 𝜏 для 2-tailed tests(двостороння похибка, можна написати ±):    (взято з &lt;a href=&quot;https://www.scribbr.com/&quot;&gt;scribbr.com&lt;/a&gt;)</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="296"/>
        <source>{error displaying table}</source>
        <translation>{помилка відображення таблиці}</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="308"/>
        <source>(Degrees of freedom = number of data points - 1)
Please mind, if we have 35 data points for example, we use 𝜏-value as if for 30 data points (because we have no data for exactly 35 points)



</source>
        <translation>(Degrees of freedom(кількість рівнів вільності) = кількості спостережень - 1)
Зверніть увагу, якщо ми маємо 35 спостережень, використовується значення 𝜏 для 30 ступенів вільності (бо немає значення для конкретно 34 ступенів вільності)



</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="325"/>
        <source>Find latest releases of MNK app on &lt;a href=&quot;https://github.com/Andriy-Bilenko/MNK-Least-Squares-Method-&quot;&gt;this github page&lt;/a&gt;.</source>
        <translation>Знаходьте найновіші релізи MНK за &lt;a href=&quot;https://github.com/Andriy-Bilenko/MNK-Least-Squares-Method-&quot;&gt;посиланням на гітхаб&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="340"/>
        <source>If you ran into some issues by any chance or need to contact the developer, it would be great to recieve your valuable feedback on emaii:  &lt;a&gt;bilenko.a.uni@gmail.com&lt;/a&gt;.</source>
        <translation>Якщо у вас виникли проблеми або маєте потребу зв&apos;язатися з розробником, будемо раді отримати ваш цінний фідбек на пошту: &lt;a&gt;bilenko.a.uni@gmail.com&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="347"/>
        <source> 



end of page</source>
        <translation> 



кінець сторінки</translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="383"/>
        <source>go back</source>
        <translation>До головної</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="mainwindow.ui" line="26"/>
        <source>Welcome</source>
        <translation>Вітаємо</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="73"/>
        <source>MNK</source>
        <translation>МНК</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="98"/>
        <source>SKV</source>
        <translation>СКВ</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="123"/>
        <source>HELP</source>
        <translation>ДОПОМОГА</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="148"/>
        <source>EXIT</source>
        <translation>ВИЙТИ</translation>
    </message>
    <message>
        <source>welcome</source>
        <translation type="vanished">вітаємо</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="81"/>
        <location filename="mainwindow.cpp" line="88"/>
        <source>ERROR</source>
        <translation>ПОМИЛКА</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="81"/>
        <location filename="mainwindow.cpp" line="88"/>
        <source>error translating.</source>
        <translation>помилка перекладу.</translation>
    </message>
</context>
<context>
    <name>MnkWindow</name>
    <message>
        <location filename="mnkwindow.ui" line="20"/>
        <source>MNK</source>
        <translation>MНK</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="39"/>
        <source>Find latest releases of MNK app on &lt;a href=&quot;https://github.com/Andriy-Bilenko/MNK-Least-Squares-Method-&quot;&gt;this github page&lt;/a&gt;.</source>
        <translation>Знаходьте найновіші релізи MНK за &lt;a href=&quot;https://github.com/Andriy-Bilenko/MNK-Least-Squares-Method-&quot;&gt;посиланням на гітхаб&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="90"/>
        <source>file status: </source>
        <translation>стан файлу: </translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="126"/>
        <source>UNTITLED.csv</source>
        <translation>UNTITLED.csv</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="164"/>
        <location filename="mnkwindow.ui" line="194"/>
        <source>PushButton</source>
        <translation>PushButton</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="232"/>
        <source>X errs</source>
        <translation>похибки X</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="251"/>
        <source>all X errs</source>
        <translation>окремі похибки для кожного X</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="270"/>
        <location filename="mnkwindow.ui" line="311"/>
        <location filename="mnkwindow.ui" line="352"/>
        <location filename="mnkwindow.ui" line="402"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="292"/>
        <source>no X errs</source>
        <translation>похибки X відсутні</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="333"/>
        <location filename="mnkwindow.ui" line="466"/>
        <source>fixed relative errs</source>
        <translation>фіксована відносна похибка</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="383"/>
        <location filename="mnkwindow.ui" line="493"/>
        <source>fixed absolute errs</source>
        <translation>фіксована абсолютна похибка</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="431"/>
        <source>Y errs</source>
        <translation>похибки Y</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="442"/>
        <source>all Y errs</source>
        <translation>окремі похибки для кожного Y</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="454"/>
        <source>no Y errs</source>
        <translation>похибки Y відсутні</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="534"/>
        <source>Intercept =   __________
Slope =   __________</source>
        <translation>Intercept =   __________
Slope =   __________</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="599"/>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="608"/>
        <source>Tools</source>
        <translation>Інструменти</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="615"/>
        <source>View</source>
        <translation>Вигляд</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="627"/>
        <source>Open</source>
        <translation>Відкрити</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="637"/>
        <source>Save</source>
        <translation>Зберегти</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="647"/>
        <source>Close</source>
        <translation>Закрити</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="657"/>
        <source>Save as</source>
        <translation>Зберегти як</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="667"/>
        <source>Full Screenshot</source>
        <translation>Скріншот вікна</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="677"/>
        <source>Chart Screenshot</source>
        <translation>Скріншот графіка</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="687"/>
        <source>Light Theme</source>
        <translation>Світла тема</translation>
    </message>
    <message>
        <location filename="mnkwindow.ui" line="697"/>
        <source>Dark Theme</source>
        <translation>Темна тема</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="36"/>
        <source>FIT</source>
        <translation>АПРОКСИМУВАТИ</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="37"/>
        <source>EXIT</source>
        <translation>ВИЙТИ</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="140"/>
        <source>HINT: such an error is proper for times when you get errors for each point on the table individually (by using SKV for example), and so they may unexpectedly differ among themselves</source>
        <translation>Підказка: така похибка підходить для дослідів, де похибки для кожної точки у таблиці дістаються індивідуально (наприклад використовуючи SKV), вони можуть відрізнятись для різних точок</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="149"/>
        <source>HINT: such an error is proper when specifying and error for X has no sense, for example the number of guitar strings, you cannot say that we&apos;ve got 4 ± 0.0013 strings</source>
        <translation>Підказка: нульова похибка підходить для ситуацій, коли похибки для величини не має сенсу, наприклад ми не можемо сказати, що кількість струн гітари дорівнює 4 ± 0.0013 струни</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="158"/>
        <source>HINT: such an error is proper when using instrument with an additive scale; if you have needle ammeter, voltmeter or other instrument, please input a value that is equial to accuracy class of the instrument times its maximum value on the scale divided by 100</source>
        <translation>Підказка: така похибка властива приладам з аддитивною шкалою; якщо у вас стрілковий амперметр, вольтметр чи інший прилад, введіть сюди значення, яке дорівнює класу точності прилада, помножене на максимальне значення на його шкалі і поділене на 100</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="167"/>
        <source>HINT: such an error is proper when using instrument with multiplicative scale. Relative error of X is absolute error for X divided by X. Please input a number in range from 0 to 1, where 1 means 100% relative error</source>
        <translation>Підказка: така похибка властива приладам з мультиплікативною шкалою. Відносна похибка Х це його абсолютна похибка поділена на його значення. Будь ласка введіть число в діапазоні 0 - 1, де 1 означає 100% відносну похибку</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="226"/>
        <source>no fixed X error specified</source>
        <translation>не вказано фіксованої похибки для Х</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="232"/>
        <source>fixed X error is a negative number</source>
        <translation>фіксована похибка для Х - негативне число</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="237"/>
        <source>no fixed relative X error specified</source>
        <translation>не вказано відносної похибки для Х</translation>
    </message>
    <message>
        <source>relative X error cannot be bigger than 1 (bigger than 100%)</source>
        <translation type="vanished">відносна похибка Х не може бути більшою за 1 (більшою за 100%)</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="256"/>
        <source>no fixed Y error specified</source>
        <translation>не вказано фіксованої похибки для Y</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="262"/>
        <source>fixed Y error is a negative number</source>
        <translation>фіксована похибка для Y - негативне число</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="267"/>
        <source>no fixed relative Y error specified</source>
        <translation>не вказано відносної похибки для Y</translation>
    </message>
    <message>
        <source>relative Y error cannot be bigger than 1 (bigger than 100%)</source>
        <translation type="vanished">відносна похибка Y не може бути більшою за 1 (більшою за 100%)</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="241"/>
        <source>fixed relative X error is a negative number</source>
        <translation>фіксована відносна похибка для Х - негативне число</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="243"/>
        <source>relative X error is bigger than 1 (bigger than 100%). Such an error will not be considered correct</source>
        <translation>відносна похибка Х більша за 1 (більшою за 100%). Така похибка не вважатиметься коректною</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="271"/>
        <source>fixed relative Y error is a negative number</source>
        <translation>фіксована відносна похибка для Y- негативне число</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="273"/>
        <source>relative Y error is bigger than 1 (bigger than 100%). Such an error will not be considered correct</source>
        <translation>відносна похибка Y більша за 1 (більшою за 100%). Така похибка не вважатиметься коректною</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="300"/>
        <source>no X specified on row #</source>
        <translation>не вказано значення для Х в рядку №</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="304"/>
        <source>no Y specified on row #</source>
        <translation>не вказано значення для Y в рядку №</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="308"/>
        <source>no X error found on row #</source>
        <translation>не вказано похибки для Х в рядку №</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="315"/>
        <source>no Y error found on row #</source>
        <translation>не вказано похибки для Y в рядку №</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="336"/>
        <location filename="mnkwindow.cpp" line="406"/>
        <location filename="mnkwindow.cpp" line="633"/>
        <source>Unsaved modifications</source>
        <translation>Незбережені зміни</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="336"/>
        <location filename="mnkwindow.cpp" line="406"/>
        <location filename="mnkwindow.cpp" line="633"/>
        <source>do you want to save changes?</source>
        <translation>Зберегти зміни?</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="387"/>
        <location filename="mnkwindow.cpp" line="666"/>
        <location filename="mnkwindow.cpp" line="688"/>
        <source>Save File</source>
        <translation>Зберегти файл</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="387"/>
        <source>CSV files (*.csv)</source>
        <translation>CSV файли (*.csv)</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="393"/>
        <location filename="mnkwindow.cpp" line="419"/>
        <location filename="mnkwindow.cpp" line="425"/>
        <location filename="mnkwindow.cpp" line="438"/>
        <location filename="mnkwindow.cpp" line="459"/>
        <location filename="mnkwindow.cpp" line="482"/>
        <location filename="mnkwindow.cpp" line="516"/>
        <location filename="mnkwindow.cpp" line="541"/>
        <location filename="mnkwindow.cpp" line="563"/>
        <location filename="mnkwindow.cpp" line="575"/>
        <location filename="mnkwindow.cpp" line="586"/>
        <location filename="mnkwindow.cpp" line="672"/>
        <location filename="mnkwindow.cpp" line="694"/>
        <location filename="mnkwindow.cpp" line="757"/>
        <location filename="mnkwindow.cpp" line="1061"/>
        <source>ERROR</source>
        <translation>ПОМИЛКА</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="393"/>
        <location filename="mnkwindow.cpp" line="419"/>
        <source>chosen file is not a .csv file.</source>
        <translation>обраний файл не є файлом .csv.</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="412"/>
        <source>Choose File</source>
        <translation>Виберіть файл</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="425"/>
        <source>error openning the file.</source>
        <translation>помилка відкриття файлу.</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="438"/>
        <source>file is empty.</source>
        <translation>файл пустий.</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="459"/>
        <location filename="mnkwindow.cpp" line="482"/>
        <location filename="mnkwindow.cpp" line="516"/>
        <location filename="mnkwindow.cpp" line="541"/>
        <location filename="mnkwindow.cpp" line="563"/>
        <location filename="mnkwindow.cpp" line="575"/>
        <location filename="mnkwindow.cpp" line="586"/>
        <source>corrupted data in a .csv file.</source>
        <translation>пошкоджені дані в .csv файлі.</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="666"/>
        <location filename="mnkwindow.cpp" line="688"/>
        <source>PNG files (*.png)</source>
        <translation>PNG файли (*.png)</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="672"/>
        <location filename="mnkwindow.cpp" line="694"/>
        <source>chosen file is not a .png file.</source>
        <translation>обраний файл не є .png файлом.</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="684"/>
        <source>nothing to save</source>
        <translation>Нічого зберігати</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="684"/>
        <source>press &quot;FIT&quot; to get a chart.</source>
        <translation>натисніть &quot;АПРОКСИМУВАТИ&quot; шоб отримати графік.</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="718"/>
        <source>Names</source>
        <translation>Назва</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="721"/>
        <source>Units</source>
        <translation>Одиниці</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="757"/>
        <source>error saving the file.</source>
        <translation>Помилка збереження файлу.</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="822"/>
        <source>Saved</source>
        <translation>Збережено</translation>
    </message>
    <message>
        <location filename="mnkwindow.cpp" line="1035"/>
        <source>Modified</source>
        <translation>Змінено</translation>
    </message>
    <message>
        <source>error reading number</source>
        <translation type="vanished">помилка читання числа</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="mnk.cpp" line="32"/>
        <source>ERROR: less than two data points found</source>
        <translation>ПОМИЛКА: менше двох експериментальних точок</translation>
    </message>
    <message>
        <location filename="mnk.cpp" line="37"/>
        <source>slope is equal to zero. Data points form a vertical line.</source>
        <translation>slope дорівнює нулю. Точкові дані формують вертикальну пряму.</translation>
    </message>
    <message>
        <location filename="helpingFunctions.cpp" line="15"/>
        <location filename="helpingFunctions.cpp" line="23"/>
        <source>error reading number: </source>
        <translation>помилка читання числа: </translation>
    </message>
</context>
<context>
    <name>SkvWindow</name>
    <message>
        <location filename="skvwindow.ui" line="20"/>
        <source>SKV</source>
        <translation>СКВ</translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="49"/>
        <source>input below:</source>
        <translation>введіть нижче:</translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="83"/>
        <source>confidence interval: </source>
        <translation>довірчий інтервал: </translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="123"/>
        <location filename="skvwindow.ui" line="194"/>
        <location filename="skvwindow.ui" line="262"/>
        <source>_________</source>
        <translation>_________</translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="148"/>
        <source>result = </source>
        <translation>результат = </translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="160"/>
        <source>______±______</source>
        <translation>______±______</translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="182"/>
        <source>observations number =</source>
        <translation>кількість спостережень =</translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="216"/>
        <source>range: </source>
        <translation>спостереження в інтервалі: </translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="228"/>
        <source>_____ - _____</source>
        <translation>_____ - _____</translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="250"/>
        <source>median = </source>
        <translation>медіана = </translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="285"/>
        <source>exit</source>
        <translation>ВИХІД</translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="304"/>
        <source>calculate</source>
        <translation>ОБРАХУВАТИ</translation>
    </message>
    <message>
        <location filename="skvwindow.ui" line="330"/>
        <source>Find latest releases of MNK app on &lt;a href=&quot;https://github.com/Andriy-Bilenko/MNK-Least-Squares-Method-&quot;&gt;this github page&lt;/a&gt;.</source>
        <translation>Знаходьте найновіші релізи MНK за &lt;a href=&quot;https://github.com/Andriy-Bilenko/MNK-Least-Squares-Method-&quot;&gt;посиланням на гітхаб&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="skvwindow.cpp" line="45"/>
        <source>[Student&apos;s coefficient / t-value]&lt;br/&gt;It is recommended to visit &lt;a href=&quot;https://www.scribbr.com/statistics/students-t-table/&quot;&gt;the guide&lt;/a&gt;&lt;br/&gt;For more see HELP pane or optionally visit &lt;a href=&quot;https://en.wikipedia.org/wiki/Student%27s_t-distribution&quot;&gt;Wikipedia&lt;/a&gt;</source>
        <translation>[коеф. Стюдента / т-значення]&lt;br/&gt;Рекомендується відвідати &lt;a href=&quot;https://www.scribbr.com/statistics/students-t-table/&quot;&gt;цей гайд&lt;/a&gt;&lt;br/&gt;Більше інформації у розділі ДОПОМОГА, також можете перейти за посиланням на &lt;a href=&quot;https://en.wikipedia.org/wiki/Student%27s_t-distribution&quot;&gt;Вікіпедію&lt;/a&gt;</translation>
    </message>
    <message>
        <source>error reading floating point numbers from the box, please make sure input data is clean.</source>
        <translation type="vanished">виявлено проблему зчитування числа, будь ласка перевірте ваші дані.</translation>
    </message>
    <message>
        <location filename="skvwindow.cpp" line="158"/>
        <location filename="skvwindow.cpp" line="175"/>
        <source>ERROR</source>
        <translation>ПОМИЛКА</translation>
    </message>
    <message>
        <location filename="skvwindow.cpp" line="174"/>
        <source>there should be at least 2 input points.
(nothing will be calculated)</source>
        <translation>має бути хоча б 2 спостереження</translation>
    </message>
</context>
</TS>
