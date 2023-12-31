/* Для початку ознайомся з тим що тобі потрібно зрозуміти: 
1. Тут ти будеш бачити лише пояснення що і як працює, але перевірити або спробувати це
ти можеш у файлі: "test"
2. Для того щоб побачити який буде результат, скачай у VSCode
Live Server
Для того щоб скачати Live Server, нажми на клавіатурі: Ctrl + Shift + X
В полі пошуку пропиши: Live Server 
І якщо ти побачиш фіолетову з рожевим як антену іконку (Ritwick Dey) - скачуй
3. Після скачування ти побачиш Go Live у нижньому рядку - нажми на нього і тебе автоматично перенесе на веб-сайт у браузері
(3.1 Якщо побачиш папки, то нажми: LESSON-1, і далі test. Все готово, а тепер:)
4. Для того щоб побачити як працює JS на веб-сайті нажми праву кнопку миші і вибери в меню "Перевірити" або ж "Inspecter" і вибери "Консоль" або ж "Console"
5. Якщо ти бачиш у консолі Hello World - значить ти все зробив правильно
6. Усі тести в консолі і тд, я тобі рекомендую робити в папці js/test.js
7. Якщо ти важко щось будеш розуміти, то читай переклад і в думках повторюй цей переклад за кодом, для прикладу:

let Viktoriia = 17; (Дозволь Вікторій мати 17 (років/яблук/тд))
*/































/* РОЗПОЧНЕМО НАШИЙ УРОК:

Ключове слово: LET (в перекладі з англ: дозволити)
let value = 10 (дозволь значенню бути/дорівнювати 10)


==============================================================================================
1. Ми можемо не призначувати їй значення (тобто писати оператор без дорівнює і тд.)

==============================================================================================

let value;   // (тобто ми можемо залишити його ось так)
console.log(value); // (його стан буде undefined, тому що ми нічого туди не передали)

==============================================================================================
2. Ми можемо її перезначати у її сутності (тобто змінювати її значення)

==============================================================================================

let value;   // (тобто ми можемо залишити його ось так)
console.log(value); // (його стан буде undefined, тому що ми нічого туди не передали)
value = 10 // Давай змінимо його значення
console.log(value); // (його стан буде 10, тобто як бачиш ми можемо змінити його стан з undefined на 10)

(І так ти можеш змінювати його кожного разу, та хоть так:)

let value; // (тобто ми можемо залишити його ось так)
console.log(value); // (його стан буде undefined, тому що ми нічого туди не передали)
value = 10
console.log(value); // (його стан буде 10, тобто як бачиш ми можемо змінити його стан з undefined на 10)
value = "Hello World"
console.log(value); // (його стан буде Hello World, тобто як бачиш ми можемо змінити його стан з 10 на Hello World)


Тобто ми можемо перевизначити значення далі по ходу коду (тобто змінювати його постійно коли ми з ним зустрічаємось)

=============
END - КІНЕЦЬ
=============


Ключовий оператор: = | == | === (належить/існує | приведення типів (Не строге порівняння) | Строго належить (Строге порівняння))

const = 3; // (перемінна дорівнює 3)
console.log(3 === 3); // (Чи 3 ріна/належить 3-ці) True
console.log(3 === 5); // (Чи 3 ріна/належить 5-ці) False
console.log(3 === "3"); // (Number === String - тобто, чи належить і цифра і тип до цієї 3-ки) False
console.log(3 == "3"); // (Number == Number - Чи є 3 у тексті 3?) True

=============
END - КІНЕЦЬ
=============

Метод: indexOf() (тобто якщо ми хочемо знайти індекс інших значень, то ми можемо використовувати цей метод)
Для прикладу:
"mango".indexOf("nam") 

console.log("mango".indexOf("nam")) // -1

Якщо немає такого індекса то нам поверне -1, тому що в тексті немає nam, а є man, давайте напишемо щоб глянути що тоді буде:

console.log("mango".indexOf("man")) // 0

У нас буде 0, тобто індекс такий існує у String. А тепер давайте зробимо ще інакше:

console.log("mango".indexOf(man)) // буде помилка, тому що man не є String

console.log(mango.indexOf(man)) // буде помилка, тому що це маячня, ми не шукаємо індексу, а невідомо що.

=============
END - КІНЕЦЬ
=============

1. undefined    => false
2. null         => false
3. 0            => false
4. "" або ''    => false
5. NaN          => false (NaN - Not a Number - Не число)
6. false        => false

1. "fake"       => true
2. 1            => true
3. -1           => true
4. true         => true
5. []           => true
6. {}           => true

=============
END - КІНЕЦЬ
=============

Метод Boolean() (тобто якщо ми хочемо перетворити значення в буль, то ми можемо використовувати цей метод)

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("false")); // false
console.log(Boolean("true")); // true
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

Також щоб не писати Boolean, ми можемо написати просто !!
console.log(!!false); // false
console.log(!!"true"); // true і тд
console.log(!!"false"); // true - тому що це Str (String)


=============
END - КІНЕЦЬ
=============

console.log(Number("25.7px")); // NaN (тому що це не число, а Str)
console.log(Number(25.7px)); // Error (тому що це не число, а невідомо що)
console.log(Number(25.7)); // 27.7 (тому що це число)
*/









/* Як підключити js до проекту
1. створіть будь який файл з форматои .html і другий файл з форматом .js
2. У файлі з форматом .html пропишіть ! і нажміть ентер, ви маєте побачити такий скелет:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS</title>
</head>
<body>

</body>
</html>

3. У <body> напишіть <script src="(шлях до вашого js файлу)"></script>, для прикладу:
<script src="./js/test.js"></script> або якщо він не є у папці то просто:
<script src="./test.js"></script>

І все готово! :) Або ж ви можете писати просто ось так:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS</title>
</head>
<body>
    <script>
        console.log("Hello World");
    </script>
</body>
</html>

Але такий варіант не дуже зручний, тому я рекомендую створити окремий файл і там вже писати свій код
*/









/* 
=================================
Яка різниця між var, const і let?
=================================

===========================================================================================================================================================================================
var (Уже не використовується) - Можна було його перевизначати, він був похожий до let, але був мінус в тому що він міг 'підніматися на верх'. Тобто
Якщо ми напишемо: 

console.log(a) // помилка - не можливо знайти a ПЕЕРЕД її оголошенням
let a = 10 То так ми можемо до нього достукатися лише після оголошення
console.log(a) // 10 Тому що a є позаду нас

А з варом:

console.log(a) // undefined
var a = 10 // То так ми можемо до нього достукатися після і ПЕРЕД оголошенням
console.log(a) // 10

ТОБТО де б я б не написав цей var він завжди буде іти на верх, тому з 2015 року вели const і let
===========================================================================================================================================================================================

===========================================================================================================================================================================================
const - Не може бути виконаний ДО її інсталізації (тобто перед його викликом), їх НЕ можна оголосити НЕПРИСВОЇВШИ значення, і вона не може бути перевизначена (тобто змінена):

const a; // помилка, тобто ми ЗМУШЕНІ присвоїти йому якесь значення у будь якому випадку
const a = 10 // все чудово :)
a = 15 // Помсилка, тому що ми намагаємося перевизначити константу, що є НЕМОЖЛИВИМ!
===========================================================================================================================================================================================

===========================================================================================================================================================================================
let - Не може бути виконаний ДО її інсталізації (тобто перед його викликом), але ми можемо його оголосити і не присвоювати їй значення (тобто залишити пустим), і її можна перевизначити:

let b; // undefined - все чудово :)
let b = 10; // 10 - все чудово :)
b = 15; // 15 - все чудово :)
b = ' 150'; //  150 (буде містити в собі рядочок (Str)) - все чудово :)
console.log(b) //  150 (Str)
===========================================================================================================================================================================================


=============================
Які є типи данних в JS
=============================

Є Примітивні типи даних та складні типи данних (об'єкти):

Примітивні типи данних (імутабельні* типи даних): Number, String, Boolean, Undefined, Null (, Symbol, BigInt)

let a = 10; // Number
a = a + 2; // 12 (Ми перевизначили її)
// a = 12; // 12 (Ми перевизначили її)
a += 2 // 12

Складні типи данних: Array, Object

*імутабельні - можна змінювати значення (але тип вони свій не змінюють)
**мутабельні - НЕ можна змінювати значення (const a = 10 // Тобто a ЗАВЖДИ буде 10)

*/









/* Математичні оператори 

ЗАДАЧА 1: 
Нам потрібно дізнатися скільки загалом фруктів є у нас в кошику:

const apples = 25; // (У нас є 25 яблук)
const grapes = 105; // (і 105 виноградів)
// Як ми можемо їх порахувати?
const total = apples + grapes; // (Коли ми пишемо назву змінної, насправді ми підставлюємо її значення, тобто apples це 25 і grapes це 105) тобто під капотом у нас є: total = 25 + 105 = 130
console.log(total); // 130
// А тепер давайте дізнаємось різницю між загаломом виноградів і яблук:
const diff = grapes - apples;
console.log(diff); // 80

Ось весь код:

const apples = 25;
const grapes = 105;
const total = apples + grapes;
console.log(total);
const diff = grapes - apples;
console.log(diff);



ЗАДАЧА 2 (Комбіновані оператори):
let students = 100;
students = students + 50; // students = 100 + 50
// Або можна ще коротше:
students += 50; // students + 50 (100 + 50)
console.log(students); // 150

Ось весь код:

let students = 100;
students = students + 50;
students += 50;
console.log(students);



ЗАДАЧА 3 (Пріорітети операторів):
const result = 108 + 223 - 2 * 5
console.log(result); // 321
const resultTwo = (108 + 223 - 2) * 5
console.log(resultTwo); // 1645



ЗАДАЧА 4 (Клас Math):
Math.floor | Math.ceil | Math.round | Math.trunc | Math.sign | Math.pow | Math.sqrt | Math.abs | Math.min | Math.max | Math.random | Math.sin | Math.cos | Math.tan | Math.PI

Напишіть скрипт, який виводить у консоль заукруглені вгору/вниз і т.д. значення змінної value.
Використовуй методи Math.floor(), Math.ceil() та Math.round().
Перевір що буде в консолі при значеннях 27.3 та 27.9


const value = 27.5;
console.log(Math); // Бачимо якісь типи данних - екземпляр класу Math
console.log(Math.ceil(value)); // 28 - Округлить завжди в більшу сторону значення
console.log(Math.floor(value)); // 27 - Округлить завжди в меншу сторону значення
console.log(Math.round(value)); // 28 - Округлить завжди по математичному принципу



ЗАДАЧА 5 (Шаблонні рядки):
Склади речення за допомогою шаблонних рядків A has B bots in stock.
Де A і B - змінні вставлені в рядок

const name = "Ivan";
const age = 30;

const result = name + ' years ' + age;
console.log(result);
const result_2 = `My name is ${name} and I'm ${age} years old`;
console.log(result_2);

КОНКАНТИНАЦІЯ - це об'єднання значень двох змінних / поєднання рядків, 
                тобто їхнє ДОДАВАННЯ, тобто ЦЕ ЛИШЕ + ЗАВЖДИ ЛИШЕ +


// Str являється ДОМІНУЮЧИМ типом даних (має перевагу)
const c = 10 + 22 + "11" + 44;
console.log(c); // 321144 - 10 + 22 = 32 + '11' = '3211' + 44 = '321144'

const a = 2 * "3";
conaole.log(a) // 6
conaole.log(typeof a) // number

const b = 6 - "3";
conaole.log(b) // 3
conaole.log(typeof a) // number

const value = 10
const value_2 = '15'
const res = value + value_2 // 1015
const res_2 = value - Number(value_2) // -5
const res_3 = value - value_2 // -5


const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = companyName + ' ' + 'has' + (repairBots + defenceBots) + ' ' + 'bots in stock'; // ЖАХ
console.log(message);
const message_2 = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock'; // Ні, не то блін!
console.log(message_2);
const message_3 = `${companyName} has ${repairBots + defenceBots} bots in stock`; // ІДЕАЛЬНО
console.log(message_3);



ЗАДАЧА 6 (Методи рядків та чейнінг):
Напиши скрипт, який розраховує індекс маси тіла людини. Для цього тобі необхідно розділити
вагу в кілограмах на квадрат висоти в метрах.
Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в вигляді рядків
(спеціально для завдання). Не цілі числа можуть бути задані як дробові.

let weight = '88,3';
let height = '1.75';
console.log(weight); // 88,3
weight = weight.replace(',', '.'); // replace - замінити / змінити
console.log(weight); // 88.3
АБО Ж 
weight = Number(weight);
АБО Ж
weight = Number(weight.replace(',', '.'));
console.log(weight); // 88.3
const bmi = weight / height; // 88.3 / 1.75
console.log(bmi); // 50.457142857142856



ЗАДАЧА 7 (Оператори порівняння та приведення типів):
Яким буде результат виразів?

console.log(5 > 4); // true бо 5 більше 4-ох
console.log(10 >= '7'); // true бо 10 більше 7-ох (Num)
console.log('2' > '12'); // true бо він порівнює по КОДАХ СИМВОЛІВ (тобто це як 32 > 31)
console.log('2' < '12'); // false бо він порівнює по КОДАХ СИМВОЛІВ (тобто це як 32 < 31)
console.log('4' == 4); // true бо 4 (Num) належить до 4-ох (Num)
console.log('6' === 6); // false бо 6 (Str) не належить до 6-ох (Num)
console.log('false' === false); // false бо false (Str) не належить до false (Boolean)
console.log(1 == true); // true бо 1 (Num) це true (Boolean)
console.log(1 === true); // false бо 1 (Num) не належить true (Boolean)
console.log(0 == false); // true бо 0 (Num) це false (Boolean)
console.log('0' == false); // true бо 0 (Num) це false (Boolean)
console.log('0' === false); // false бо 0 (Str) це не false (Boolean)
console.log('Papaya' < 'papaya'); // true бо він порівнює по КОДАХ СИМВОЛІВ ("P" < "p", тобто 50 < 70)
console.log('Papaya' === 'papaya'); // false бо він порівнює по КОДАХ СИМВОЛІВ (50 === 70 + там букви одна більша а друга менша)
console.log('papa' < 'papa'); // false бо він порівнює по КОДАХ СИМВОЛІВ (70 61 70 61 < 70 61 70 61)
console.log(undefined == null); // true бо обоє повертають false
console.log(undefined === null); // false бо undefined не є однинаковим з null
console.log(5 < 4); // false бо 5 менше 4-ох
console.log(5 <= 4); // false бо 5 менше 4-ох

щоб глянути коди символів ти можеш перейти сюди:
https://unicode-table.com/en/#003



ЗАДАЧА 8 (Логічні оператори):
Яким буде результат виразів?

&& - І (і зліва і з права було true в інших випадках він верне false) (Повертає перший false або останній true)
|| - Або (Якщо true || false = true, 
          якщо false || true = true, 
          якщо false || false = false, 
          якщо true || true = true) 
        (Повертає перший true або останній false, тобто якщо воно знайде хоча б 1 true серед усіх варіантів, то він зразу верне його і далі не буде йти)

console.log(true && 3); // 3 (true)
console.log(false && 3); // false
console.log(true && 4 && 'kiwi'); // true (true && true && true)
console.log(true && 0 && 'kiwi'); // 0 (false) (true && false && true)
console.log(true || 3); // true
console.log(true || 3 || 4); // true
console.log(true || false || 4); // true
console.log('awdiawjd' || false || 4); // true
console.log(null || 2 || undefined); // true
console.log((1 && null && 2) > 0); // false ((true && false && true) > false)
console.log(null || (2 && 3) || 4); // 3 (true) (false || true || true)



ЗАДАЧА 9 (Значення за замовчуванням та оператор нульового злиття (??)):

|| - АБО вертає до 6 значень які повертають false
?? - він працює лише на 2 значення перше це null, друге - undefined

const incomingValue = 5;
// const res = incomingValue + Number('qweqweqwe'); // NaN
const res = incomingValue + Number('500'); // 500
// let test;
let test_2 = 0;
console.log(test_2);
const value = test_2 ?? 'some value' // Тут оператор || не підходить бо він підставить 'some value'
console.log(value);

console.log(res);
const defaultValue = 10; // Значення за замовчуванням
const value = res ?? defaultValue; // 5
console.log(value);
*/


















// ПРОДОВЖУЄМО НАШУ ДРУГУ ЧАСТИНУ JS - що ж - ПОГНАЛИ!
/* 
    ВИДИ РОЗГАЛУЖЕННЯ
Є 3 види розгалужень: 
1. Умова if () {}, else if та else {}
2. Тернарний вираз (умова ? приклад1 : приклад2)
3. swith () { case: приклад1, case: приклад2, default: приклад3 }

Умова if та else - перевіряє чи вираз який є всередині - правдивий:

if (умова/завдання що ми з чим перевіряємо і тд.) {
    
} else {
    
} 

if (4 > 3) {                        // true
    console.log('true');
} else {                            // false
    console.log('false');
} 

if - ми використовуємо щоб написати умову яка має пройти, і виконатись
else - ми прописуємо якщо умова if раптом не втконалась, тобто сталася помилка, або if нічого не отримав
else if - ще один вид який виконується якщо if не підходить, але else if - так, для прикладу:

if (num < 0) {
    console.log('num < 0');
} else if (num > 0) {
    console.log('num > 0');
} else {
    console.log('num = 0');
}

Або ще один приклад:

const value = 5;

if (value > 5) {
    console.log(`${value} > 5`);
} else if (value < 6) {
    console.log(`${value} > 6`);
} else if (value > 3) {
    console.log(`${value} > 3`);
} else {
    console.log(`${value} <= 3`);
}


const value = 0
if(value) {
    console.log('true');
    console.log('if');
} else {
    console.log('false');
    console.log('else');
}


let result;

if(7 > 6) {
    result = 'bigger';
} else {
    result = 'less';
}

2. const result = 5 > 6 ? '5 is bigger' : '6 is bigger';
У перемінній результат запитай що ти отримав 5 > 6 чи 6 > 5? і напиши відповідь '5 is bigger' якщо 5 більше, або '6 is bigger' якщо 6 більше.

Це те саме якщо я напишу:

if (5 > 6) {
    console.log('bigger')
} else {
    console.log('less')
}


3. switch () { case: приклад1, case: приклад2, default: приклад3 }

const res = 10 + 5;
console.log(res);
console.log(testValue)

switch(value) {
    case value: 
        value
        break // ОБОВ'ЯЗКОВИЙ, бо інакше ви побачите і цю відповідь і default
    case value: 
        value
        break // ОБОВ'ЯЗКОВИЙ, бо інакше ви побачите і цю відповідь і default
    case value: 
        value
        break // ОБОВ'ЯЗКОВИЙ, бо інакше ви побачите і цю відповідь і default 
    default: 
        value // Тут break НЕ ПОТРІБЕН )))
}


const value = 5;

switch(value) {
    case 1: 
        console.log('1') 
        break
    case 2: 
        console.log('2') 
        break
    case 3: 
        console.log('3') 
        break
    case 5: 
        console.log('5') 
        break
    default: console.log('Невідоме число')
}

Але для діапазонів switch на жаль НЕ ПІДХОДИТЬ і НЕ ВИКОРИСТОВУЄТЬСЯ :(

ознайомлюємось з дебагом:

const value = 5

if(value === 1) {
    console.log('1')
} else if(value === 2) {
    console.log('2')
} else if(value === 3) {
    console.log('3')
} else if(value === 5) {
    console.log('5') 
} else {
    console.log('Невідоме число')
}


===============================================================
!!!!!!!!!!!!!!!!!!!!!ОБЛАСТІ ВИДИМОСТІ!!!!!!!!!!!!!!!!!!!!!!!!!
===============================================================

Є 2(3) види видимості:
1. Глобальна
2. Блочна / Локальна
і ще існує 3-тя це ФУНКЦІОНАЛЬНА (який зупиняв var який вискакував наверх)

Давайте розберемось з цими областями видимості:

const a = 5 // Глобальна область видимості (бо можемо застосувати її у будь якому місці коду)

if (a === 5) {
    console.log('Блочна') // бо можемо застосувати лише її у коді
}

Інший приклад:

const a = 15 // Глобальна

if(true) {
    console.log(a)
}

АЛЕ:

if(true) {
    const b = 22
}

console.log(b) // Ми не можемо побачити 22, тому що константа b є БЛОЧНОЮ, а не глобальною, тобто ми не можемо із зовні полізти всередину, але з зовні в середину - так, ще один приклад:

const test = 'test'

function foo() {
    console.log(test) // test
    const test_two = 'test_two'
}

console.log(test_two) // Error
console.log(test) // test

А тепер давайте пропишнмо це саме з var:


const test = 'test'

function foo() {
    console.log(test) // test
    var test_two = 'test_two'
}

console.log(test_two) // test_two
console.log(test) // test

ТОБТО:
1) ГЛОБАЛЬНА
const a = 5
2) БЛОЧНА / ЛОКАЛЬНА
{ ... }
3) ФУНКЦІОНАЛЬНА
function() { ... }

А тепер трошки практики:

ПРАКТИКА 1:

let a = 15;

if(true) {
    a = 25
}

console.log(a) // Яка буде відповідь тут в консолі???                                                                                                                                                                          Правильна відповідь: 25, тому що це метод let (Глобальна), а її змінювати можна. Тобто ми знайшли a = 15, знайшли і ПЕРЕВИЗНАЧИЛИ на 25, тому 25.


ПРАКТИКА 2:

let a = 15;

if(true) {
    let a = 1;
    a = 25; 
}

console.log(a) // Яка буде відповідь тут в консолі???                                                                                                                                                                          Правильна відповідь: 15, тому що у функції є інше let (тобто ми створили ЛОКАЛЬНУ перемінну) і тому ми міняємо цю цюфру 1 на 25, але глобальну - не чіпаємо, тому нам вертає 15.


ПРАКТИКА 3:

let a = 15;

if(true) {
    a = 25;
    let a = 1;
}

console.log(a) // Яка буде відповідь тут в консолі???                                                                                                                                                                          Правильна відповідь: Error, тому що ми намагаємося у if (Локальній) змінити число ПЕРЕД let a = 1, тому воно викликає помилку.


ПРАКТИКА 4:

let a = 10;

if(true) {
    let a = 15;
    if(true) {
        a = 25
    }
}

console.log(a) // Яка буде відповідь тут в консолі???                                                                                                                                                                          Правильна відповідь: 10, тому що ми не можемо взяти з ЛОКАЛЬНОГО блоку a, але якщо ми всередині if(true) { let a = 15 ... console.log(a) } - пропишемо, тоді ми побачимо 25.


ПРАКТИКА 5:

let a = 10;

if(true) {
    a = 15;
    if(true) {
        a = 25
    }
}

console.log(a) // Яка буде відповідь тут в консолі???                                                                                                                                                                          Правильна відповідь: 25, тому що ми просто позмінювали a, тому 25.


ПРАКТИКА 6:

let a = 10;

if(true) {
    a = 15;
    if(true) {
        let a = 25
    }
}

console.log(a) // Яка буде відповідь тут в консолі???                                                                                                                                                                          Правильна відповідь: 15, тому що ми просто змінили глобальну a на 15, тому 15.


ПРАКТИКА 7:

let a = 15;

if(true) {
    a = 15;
    if(true) {
        let a = 25
    }
}

console.log(a) // Яка буде відповідь тут в консолі???                                                                                                                                                                          Правильна відповідь: 15, тому що ми просто змінили глобальну a на 15, тому 15.


ПРАКТИКА 8:

let b = 25;

if(true) {
    let a = 15;
    b = 44
    if(true) {
        let a = 25
        b = 31
    }

    a = 44
    console.log(b) // Яка буде відповідь тут в консолі???                                                                                                                                                                     Правильна відповідь: 31, тому що ми просто поперезмінювали b, тому 31
}

console.log(a) // Яка буде відповідь тут в консолі???                                                                                                                                                                         Правильна відповідь: Error, тому що ГЛОБАЛЬНО перемінної a - НЕ ІСНУЄ, тому помилка.




==========================================================
!!!!!!!!!!!!!!!!!!!!!ВИДИ ЦИФКЛІВ!!!!!!!!!!!!!!!!!!!!!!!!!
==========================================================

1. Цикл for() - для повторення якоїсь операції певних разів (for - з англ.: для/до)
2. Цикл while - виконується до тих пір поки умова === true (while - з англ.: поки) (Перевірив - зробив)
3. Цикл do {} while () - спочатку пишемо що РОБИТИ, а потім перевіряє (тобто виконує) (Зробив - перевірив)


for((ініціалізація), (умова), (простий вираз)) {} Приклад:

Для і який дорівнює 0, припини працювати коли і дійде ДО 5, і з кожним разом добавляй по +1.
for(let i = 0; i < 5; i+=1) {
    console.log(i) // 0 1 2 3 4
}


Наступний приклад:

             1234567891011
const str = 'hello world';
             012345678910

for(let i = 0; i < str.length; i++) { // Індекс ЗАВЖДИ починається з 0 - ЗАВЖДИ!
    console.log(str[i])
}




while(true) { // Поки стан true напиши/виконай:
    console.log('Hello World')
}

// Будьте обережні бо така конструкція спамитиме вам в консоль поки у вас не закінчиться пам'ять на вашому ПК. (це не жарт)
Наступний приклад:

const str = 'hello world'
let i = 0;
while(i < str.length) {
    console.log(str[i]);
    i += 1;
}

// Цикл while використовується досить таки рідко, для прикладу - клікери, і щось типу цього, давайте трошки покращимо нашу програму

const str = 'hello world'
let i = 0;
while(i < str.length) {
    if(str [i] === 'w') {
        console.log('I saw W')
        (break) // Тут можемо прописати break якщо хочемо щоб воно ПРИПИНИЛО (після того як знайде w) шукати або працювати далі.
    }
    console.log('no', str[i]);
    i += 1;
}



const str = 'hello world'
let i = 0;
do {
    if(str [i] === 'w') {
        console.log('I saw W')
        (break) // Тут можемо прописати break якщо хочемо щоб воно ПРИПИНИЛО (після того як знайде w) шукати або працювати далі.
    }
    i += 1;
} while(i < str.length)
*/

/*ТЕПЕР ПРАКТИКА
ЗАДАЧА 1 (Введення користувача та розгалуження):
Використовуючи конструкцію if ... else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то покажи alert з рядком "Правильно!", в іншому випадку - "Не знаєш? - ECMAScript"

const value = prompt('Яка офіційна назва JavaScript?') // prompt - Допомагає комунікувати з нишим користувачем (тобто щось написати)
console.log(value)

if(value === 'ECMAScript') {
    alert('ПРАВИЛЬНО!') // Просто показує повідомлення
} else {
    alert("Не знаєш? - ECMAScript")
}


ЗАДАЧА 2 (Відображення часу - if ... else):
Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляда рядка формату: "14г. 26хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок: "14год.", без хвилин.

const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
    timestring = `${hours} год. ${minutes} хв.`;
} else {
    timestring = `${hours} год.`;
}
console.log(timestring)


ЗАДАЧА 3 (Розгалуження):
Напиши скрипт який виводить у консоль рядок: "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено 0, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, то у консолі повиннен бути рядок "Це негативне число"

const userInput = Number(prompt('Введіть число' ))

if (!userInput) {
    console.log('Це 0')
} else if (userInput > 0) {
    console.log('Це позитивне число')
} else {
    console.log('Це від\'ємне число')
}


ЗАДАЧА 3.1 (Розгалуження):
Напиши скрипт який виводить у консоль рядок: "Це парне число", а в інших випадках "Це не парне число"

const userInput = Number(prompt('Введіть число' ))
if(userInput % 2) {
    console.log('Парне число')
} else {
    console.log('Не парне число')
}

АБО ЗРОБИМО ЧЕРЕЗ ТЕРНАРКУ:
console.log(userInput % 2 ? "Не парне" : "Парне")


ЗАДАЧА 4 (Вкладені розгалуження): 
Напиши скрипт, який порівнює числа у змінних a і b. Якщо обидва значення більше 100, то введи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

const a = 120;
const b = 180;

if(a > 100 && b > 100) {
    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
} else {
    console.log(b + 512)
}

АБО ЗРОБИМО ЧЕРЕЗ ТЕРНАРКУ:

if(a > 100 && b > 100) {
    console.log(a > b ? a : b);
} else {
    console.log(b + 512)
}


ЗАДАЧА 5 (Форматування посилання (endsWith)): 
Напиши скрипт який перевіряє чи закінчується значення змінної link з символом /. Якщо ні, то додай до кінця значення link цей символ. Використовуй конструкцію if ... else.

let link = 'https://my-site.com/about';

if(!link.endsWith('/')) {
    link += '/'
} else {
    console.log('it\'s ok')
}

console.log(link)


ЗАДАЧА 6 (Форматування посилання (includes та логічне "I")):
Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, то додоай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if ... else.

let link = 'https://my-site.com/about';

if (!link.endsWith('/') && link.includes("my-site")) {
    link += '/'
} else {
    console.log('it\'s ok')
}

console.log(link)


ЗАДАЧА 7 (Форматування посилання (тернарний оператор)):
Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

let link = 'https://my-site.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//     link += '/';
// }
console.log(link.includes('my-site') && !link.endsWith('/') ? link += '/' : link)


ЗАДАЧА 8 (if ... else та логічні оператори):
Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

Якщо значення змінної hours:
1) менше 17, виводь рядок: "Pending"
2) більше або дорівнює 17 І менше або дорівнює 24, виводь рядок: "Expires"
3) більше 24, виводь рядок "Overdue"

const hours = 10;
if (hours < 17) {
    console.log("Pending")
} else if (hours >= 17 && hours <= 24) {
    console.log("Expires")
} else {
    console.log("Overdue")
}


ЗАДАЧА 9 (Дедлайн здачі проекту (if ... else)):
Напиши скрипт для відображення часу дедлайну задачі проекту. Використовуй конструкцію if ... else.

1) Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
2) Якщо до дедлайну 1 днів - виведи рядок "Завтра"
3) Якщо до дедлайну 2 днів - виведи рядок "Після завтра"
4) Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

const deadline = 0

if (!deadline) {
    console.log("Сьогодні")
} else if (deadline == 1) {
    console.log("Завтра")
} else if (deadline == 2) {
    console.log("Після завтра")
} else {
    console.log("Дата у майбутньому")
}


ЗАДАЧА 10 (Дедлайн здачі проекту (switch)):
А тепер давайте зробимо все те саме але через метод switch:

const deadline = 0

switch(deadline) {
    case 0:
        console.log("Сьогодні")
    case 1:
        console.log("Завтра")
    case 2:
        console.log("Після завтра")
    default:
        console.log("Дата у майбутньому")
}


ЗАДАЧА 11 (Дедлайн здачі проекту (if ... else)):
Напиши цикл for, який виводить у консоль браузера часла за зростаням від min до max, але тільки якщо число кратне 5.

const max = 100;
const min = 20;

for(let i = min; i >= min && i <= max; i += 1) {
    if(!(i % 5)) {
        console.log(i)
    }
}


ЗАДАЧА 12 (Введення користувача та розгалуження):
Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

1) Якщо відвідувач вводить "Адмін", то prompt запитує пароль
2) Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
3) В іншому випадку ввести рядок "Я вас не знаю"
4) Пароль потрібно перевірти так:
    Якщо введено пароль: "Я адмін", то вивести рядок "Добрий день господарю!"
    Інакше виводити рядок "Не вірний пароль"

const login = prompt('Введіть логін:')
const pass = 'Я адмін'

if (!login) {
    alert('Я вас не знаю!')
} else if (login === 'Адмін') {
    const password = prompt('Введіть пароль:')
    if (password === pass) {
        console.log("Добрий день господарю!")
    } else {
        console.log("Не вірний пароль")
    }
} else {
    console.log('Усе пішло не так!')
}

Або можна так:

const login = prompt('Введіть логін:')
const pass = 'Я адмін'

if (!login) {
    alert('Скасовано')
} else if (login === 'Адмін') {
    const password = prompt('Введіть пароль:')
    console.log(password === pass ? "Добрий день господарю!" : "Не вірний пароль")
} else {
    alert('Я вас не знаю!')
}




ЯКЩО ХОЧЕШ ПОПРАКТИКУВАТИСЬ БІЛЬШЕ ПЕРЕХОДЬ СЮДИ:
https://www.freecodecamp.org/learn/
*/