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


























/*
.split(delimiter) - перетворює рядок в масив, «розбиваючи» його роздільником delimiter. Якщо роздільник - це порожній рядок, то створиться масив окремих символів. Роздільником може бути один або декілька символів.
.join(delimiter) - об'єднує елементи масиву у рядок. У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter. Тобто ця операція протилежна методу рядків split(delimiter).
.indexOf(value) - повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число -1, якщо такий елемент відсутній. Використовуйте indexOf тоді, коли необхідно отримати сам індекс елемента.
.includes(value) перевіряє, чи містить масив елемент зі значенням value і повертає true або false відповідно. Застосування цього методу корисне в ситуаціях, коли необхідно перевірити, чи є елемент в масиві і не важлива його позиція (індекс).
.push() - додає один або декілька елементів наприкінці масиву, без необхідності зазначати індекси елементів, що додаються. Повертає довжину масиву після додавання елементів.
.pop() - видаляє останній елемент з кінця масиву і повертає видалений елемент. Якщо масив порожній, метод повертає undefined.
.slice(begin, end) - повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.
.splice() - Видаляє, додає і замінює елементи у довільному місці масиву.
.concat()​ - Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий.
.reverse() - Перевертає все з ніг на голову (останнє стане першим, а перше останнім)

А тепер давайте глянемо як вони всі працюють на практиці:

const a = [1, 2, 3, 4, 5, 6]
const b = "Mango"
const message = "JavaScript - це цікаво";
const words = ["JavaScript", "це", "цікаво"];
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
const numbers = [];
const numbers_two = [1, 2, 3, 4, 5];
const scores = [1, 2, 3, 4, 5];
const colors = ["red", "green", "blue"];
const languages = ["C", "C++", "Java", "JavaScript"];
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

console.log(b.split("")) // ['M', 'a', 'n', 'g', 'o']
console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"

console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]

console.log(numbers_two.pop()); //  5
console.log(numbers_two); // [1, 2, 3, 4]

console.log(numbers_two.pop()); //  4
console.log(numbers_two); // [1, 2, 3]

console.log(numbers_two.pop()); //  3
console.log(numbers_two); // [1, 2]

console.log(numbers_two.pop()); //  2
console.log(numbers_two); // [1]

console.log(numbers_two.pop()); //  1
console.log(numbers_two); // []

console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]

const deletedScores = scores.splice(0, 3);
console.log(scores); // [4, 5]
console.log(deletedScores); // [1, 2, 3]
colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]
console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]





А тепер тести:

console.log([7, 3, 8, 9, 2].splice(3)) // Що тут буде?                                                                                                                                                                                                                         Правильно: [9, 2], тобто ми почали з індекса 3 і далі він написав які ще залишилися (2-ий кінцевий індекс не обов'язковий)

console.log([8, 5, 3, 9, 3].indexOf(3)) // Що тут буде?                                                                                                                                                                                                                        Правильно: 2, бо ми шукаємо трійку, значить якщо воно його знайшло то покаже нам номер індекса у якому він знайшов цю цифру

console.log([8, 5, 3, 9, 3].indexOf(4)) // Що тут буде?                                                                                                                                                                                                                        Правильно: -1, бо у нашому списку немає цифри 4, тобто і інлекса також немає. Тому -1

console.log(["JS", "is", "awesome!"].join(" ")) // Що тут буде?                                                                                                                                                                                                                Правильно: JS is awesome!, тому що join перекладається як приєднати, тобто він просто добавив пробіли

console.log([2, 4, 6].concat([1, 3], [5])) // Що тут буде?                                                                                                                                                                                                                     Правильно: [2, 4, 6, 1, 3, 5], бо він поєднує елементи масивів в один цілий, і приймає список масивів (Тобто він підшиває наш список масивів до нашого готового)










Що таке масив?
Масив - це складний тип даних (а також він структорований тип даних) який ближче відноситься до об'єкта (тобто масив є представником об'єкта)
Що представляє собою масив?
Це якась структорована одиниця яка зберігає в собі дані, вона може зберігати в собі будь що, для прикладу:


// [] - Літерал (масиву/об'єкту)
const array = []
У масиві ми можемо зберігати БУДЬ ЯКІ ПРИМІТИВНІ типи даних і БУДЬ ЯКІ складні типи даних:

* - Звичний порядковий номер

// Індекси:    0     1      2     3        4
const array = [1, "Hello", null, true, [1, 2, 3]]
// *:          1     2      3     4        5
console.log(array)

ЗАПАМ'ЯТАЙТЕ: Індекс елемента ЗАВЖДИ буде на одиницю менший ніж його порядковий номер
А як нам перевірити чи ми працюємо з масивом чи з чимось іншим? Дуже просто:

const array = [1, "Hello", null, true, [1, 2, 3]]
console.log(typeof array) // object ❌ - так робити не можна
console.log(Array.isArray(array)) // true ✅ - так робити можна
console.log(Array.isArray('Hello')) // false - бо це str а не масив

А як нам побачити конкретний елемент в масиві?

const firstElem = array[<тут пишемо індекс нашого елементу>]
const firstElem = array[0] // Ось таак це виглядає
console.log(firstElem) // 1

const secondeElem = array[1] // Ось так це виглядає
console.log(secondeElem) // Hello, і тд.

console.log(array.length) // 5 - Порядковий номер
const last = array[array.length - 1] // Ми отримаємо омтанній індекс
console.log(last) // [1, 2, 3]


Для того щоб нам попрацювати з масивом, нам потрібен цикл (for або for (... of ...))
Давайте розберемо ці 2 методи:

for(let i = 0; i < array.length; i += 1) {
    console.log(i)
    // Звертаємось до елемента по індексу, створимо лічильник:
    console.log(array[i]);
    // І тепер ми бачемо перебраний масив, Готово
    if(Array.isArray(array[i])) {
        for(let j = 0; j < array[i].length; j += 1) {
            console.log(array[i][j]);
        }
        continue
    }
    console.log(array[i])
}


for(let i = 0; i < array.length; i += 1) {
    const item = array[i]
    if(Array.isArray(item)) {
        for(let j = 0; j < item.length; j += 1) {
            console.log(item[j]);
        }
        continue;
    }
    console.log(array[i]);
}


Другий цикл:

for(const item of array) {
    console.log(item)
}

Все - набагато простіше )))

Але є мінус працюючи з for(... of ...) то ми створюємо копію елемента,
а працюючи з циклом for ми звертаємось одразу до елемента в масиві.
Що ж це означає? Це означає, що якщо ми захочемо змінити якийсь елемент в масиві,
для прикладу:


const array = [1, "Hello", null, true, [1, 2, 3]]

for(const item of array) {
    if(typeof item === 'string') {
        item = false // Тобто фактично ми маємо замінити Hello на false, але ми побачимо помилку, яка каже що ми намагаємось ПЕРЕВИЗНАЧИТИ перемінну, тобто у нас є якась змінна в якій просто є присвоєне значення 
    }
}


for(let item of array) {
    if(typeof item === 'string') {
        item = false // Тобто фактично ми маємо замінити Hello на false, але тепер ми взагалі нічого не бачимо, але якщо ми законсолимо, то:
    }
}
console.log('for of', array); // Нічого не змінилося

А тепер зробимо все те саме але з for:

for(let i = 0; i < array.length; i += 1) {
    if(typeof array[i] === 'string') {
        array[i] = false
    }
}
console.log('for', array) // В даному випадку, ми справді замінили Hello на false

Тобто:
Якщо нам потрібно МУТУВАТИ масив, або отримати доступ до індекса, то використовуємо for
Якщо нам потрібно просто перебрати його (або дізнатися яке там значення лежить), але не змінити його в масиві, то for of.



І давайте ще зробимо те саме але з методом while:

let i = 0;

while (i < array.length) {
    // console.log(array[i]);
    if (typeof array[i] === 'string') {
        array[i] = false;
    }
    i += 1;
}

console.log('while:', array)

While - застосовують ДУЖЕ ДУЖЕ ДУЖЕ рідко (навіть в бекенді його дуже рідко можна побачити)







Мутабельні

let value = 1;
let test = value;

value += 10;
console.log('value:', value, '|', 'test:', test) // 11, 1



Складні типи данних:
const array = [1, 2, 3, 4, 5];
const copy = array;

array.push(6, 7); // 1, 2, 3, 4, 5, 6, 7
// copy.push(8, 9); // 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log('array:', array, '|', 'copy:', copy)


Порівняння
console.log(1 === 1); // true
console.log('hello' === 'hello'); // true
console.log([1, 2, 3] === [1, 2, 3]); // false Бо ми порівнюємо їх за поcиланням, а не значенням - бо це СКЛАДНИЙ ТИП ДАНИХ

const array = [1, 2, 3, 4, 5];
const copy = array;
console.log(array === copy); // true



Перевизначення, НЕ МУТАБЕЛЬНИЙ ТИП ДАНИХ (як і будь який примітив - НЕ МУТАБЕЛЬНИЙ)
let number = 1;
number += 15;
console.log(number) // 16



const array = [1, 2, 3]
array.push(4) // 1, 2, 3, 4
array.pop() // 1, 2, 3
// Або ми моженмо повністю його почистити:
array.length = 0
console.log(array) // []
console.log(Array.isArray(array)); // true



const array = [1, 2, 3]
array = 'staring' // Ми АБСЛЮТНО змінили його значення з [] на str (тобто повністю його переписали і змінили)
array.push(4) // У такому випадку ми лише ДОПИСАЛИ щось




МЕТОДИ МАСИВУ:

const str = 'Hello world';
const arr = str.split(' ') // split - не змінює, а створює копію, тому що const ми перезмінити не можемо
console.log(arr) // ['Hello', 'world']
console.log(str) // Ми побачимо що рядок залишився без змін



arr.reverse() // ['world', 'Hello']


*/



























































/* ФУНКЦІЯ

Функція - це якийсь незалежний шматочок коду, який типу знаходиться в обгортці для того щоб ми могли його перевикористовувати на різних даних, приклад:



Давай наведу інший приклад і поясню:

function writeTitle(nameForTitle) {
    return nameForTitle
}

console.log(writeTitle('А ТЕПЕР ГЛЯНЬ В КОНСОЛЬ - Зручно? )))'))

1. Ми створили функцію яку назвали: 'writeTitle'
2. У ню ми передали: 'nameForTitle' (Назву для тайтла)
3. Ми сказали, що те що до неї прийде (nameForTitle), це і поверни (Тобто напиши нам це десь)
4. Через консоль, ми глянули як воно працює, тобто:

writeTitle('текст') пішов до функції, у nameForTitle передав наш 'текст' і повернув його а консоль відобразила.



const arr = [1, 2, 3, 4]; // Створимо масив з 1, 2, 3, 4

(І нам потрібно перемножити всі ці масиви на 2)

for(let i = 0; i < arr.length; i +=1) {
    arr[i] = arr[i] * 2;
}

console.log(arr)



Але тепер уявіть собі що у нас таких масивів 3

const arr = [1, 2, 3, 4];
const arr1 = [5, 6, 7, 8];
const arr2 = [9, 10, 1, 11];

Досить не зручно буде писати для кожного мосива по циклі for, тому що воно займе багато місця,
тому тут нам прийде на допомогу функція. Це певна обгортка, яка виконує ОДНОТИПНУ дію.
У нас уже є заготовка коду (цикл for) і нам потрібно прогнати кожен масив через цей цикл.


* - назва функції
** - що ми хочемо прийняти у цю функцію або передати у ню (тобто параметр)
*** - викликаємо дану функцію використовуючи її назву, а в дужках передаємо що ми хочемо туди покласти (якщо це потрібно)
**** - передаємо аргумент (тобто що ми хочемо передати щоб наша функція працювала)

function *(**) {
    (code)
}

***(****)


Тому тепер ми зробимо так:

function sum(item) {
    for(let i = 0; i < arr.length; i +=1) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr)
}

sum(arr)
sum(arr1)
sum(arr2)


ЯКІ Є ТИПУ ФУНКЦІЙ?

Є 3 види/типи функцій:

1. function expression (вираз функції (функціональний вираз))
2. function declaration (оголошення функції (Задекларована функція))
3. (Розберемо потім бо вона існує ЛИШЕ для змінної var)

function declaration, це те з чим ми вже ознайомились:

// declaration
function name(params) {

}

name()

// expression - Це функція яка зберігається у певній змінній

const name = function() {

}

name()

Давайте розглянемо яка різниця між цими двома функціями:

const arr = [1, 2, 3, 4];
const arr1 = [5, 6, 7, 8];
const arr2 = [9, 10, 1, 11];


function name(params) {
    for(let i = 0; i < arr.length; i +=1) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr)
}

sum(arr)
sum(arr1)
sum(arr2)

const name = function() {
    for(let i = 0; i < arr.length; i +=1) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr)
}

sum(arr)
sum(arr1)
sum(arr2)


function expression - Це функція яка знаходиться в змінній (const), тобто фактично до змінної можемо достукатися ТІЛЬКИ після її місця оголошення (тобто ОГОЛОСИЛИ і ВИКЛИКАЛИ (АЛЕ ВИКЛИКАТИ І ПОТІМ ОГОЛОСИТИ - НЕ МОЖЛИВО), тобто викликати її ПЕРЕД ЦИМ/ДО ЦЬОГО - НЕ МОЖЛИВО, ми побачимо помилку), а також вона немає назв, тобто ми звертаємось до назви змінної, а не самої функції. (Тобто це анонімна функція/функція без назви)
function declaration - Це функція, яка може бути викликана до її місця оголошення у коді. Оголошення функції за допомогою ключового слова function дає можливість викликати цю функцію будь-де в області видимості, навіть перед самим оголошенням. (Тобто вона має можливість підніматися не залежно від її місця оголошення/знаходження - по суті як var)


Тобто function expression:
// ✅ - ПРАЦЮВАТИМЕ

const name = function() {
    for(let i = 0; i < arr.length; i +=1) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr)
}

sum(arr)
sum(arr1)
sum(arr2)

// ❌ - НЕ ПРАЦЮВАТИМЕ - буде помилка

sum(arr)
sum(arr1)
sum(arr2)

const name = function() {
    for(let i = 0; i < arr.length; i +=1) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr)
}

function declaration:

// ✅ - ПРАЦЮВАТИМЕ

const name = function() {
    for(let i = 0; i < arr.length; i +=1) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr)
}

sum(arr)
sum(arr1)
sum(arr2)

// ✅ - ПРАЦЮВАТИМЕ

sum(arr)
sum(arr1)
sum(arr2)

const name = function() {
    for(let i = 0; i < arr.length; i +=1) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr)
}

Більше деталей можете глянути тут: https://codeguida.com/post/199



Трошки практики:

#1

greet()

const greet = function() {
    console.log("WELCOME")                                                                                                                                                                                                                                                                        // Буде помилка, все правильно, бо це function expression )))
}

#2

greet()

function greet() {
    console.log("WELCOME")                                                                                                                                                                                                                                                                        // Все працюватиме, все правильно, бо це function declaration )))
}


Добрі новини - function declaration використовується ЗАВЖДИ! Я сам ще ні разу не бачив проекту
               де використовували function expression (він просто вже старий, а declaration - новий)




НАСТУПНЕ:

function add(val, val1, val2, val3) {
    console.log(val, val1, val2, val3)
    console.log(val + val1 + val2 + val3)
}

add(1, 2, 3, 4)
add(1, 2, 3, 4, 5)
add(1, 2, 3, 4, 5, 6)

1. Головне це порядок передачі тобто: val = 1, val1 = 2, val2 = 3, val3 = 4


Але якщо нам потрібно 6 значень а не 4? Це ж не зручно писати кожного разу до функції нове і нове, тому:

function add(val, val1, val2, val3, val4, val5) {
    // console.log(val, val1, val2, val3, val4, val5) // 1 2 3 4 undefined undefined | 1 2 3 4 5 undefined | 1 2 3 4 5 6
    console.log(val + val1 + val2 + val3 + val4 + val5) // NaN | NaN | 21
}

add(1, 2, 3, 4)
add(1, 2, 3, 4, 5)
add(1, 2, 3, 4, 5, 6)

Але це по переше - не зручно, оскільки ми не знаємо скільки параметрів нам може передати користувач, тому для цього існує arguments:

function add() {
    console.log(arguments)
}

add(1, 2, 3, 4)
add(1, 2, 3, 4, 5)
add(1, 2, 3, 4, 5, 6)

І тепер у нас ВЗАГАЛІ НЕМАЄ НЕОБХІДНОСТІ оголошувати якісь параметри - зручно? )))
А тепер давайте пропишемо код який добавлятиме їх усіх:

function add() {
    let sum = 0
    console.log(arguments)
    for (let i = 0; i < arguments.length; i += 1) {
        sum += arguments[i]
    }
    console.log(sum)
}

add(1, 2, 3, 4)
add(1, 2, 3, 4, 5)
add(1, 2, 3, 4, 5, 6)

І воля, все готово, тепер ми не маємо ЖОДНОГО NaN чи undefined, тому що фактично
Скільки до нас прийшло стільки і виконалось.
Також можна написати ще ось так:

function add() {
    let sum = 0
    console.log(arguments)
    for (const value of arguments) {
        sum += value
    }
    console.log(sum)
}

add(1, 2, 3, 4)
add(1, 2, 3, 4, 5)
add(1, 2, 3, 4, 5, 6)

Переведемо в повноцінний масив (метод Array):

function add() {
    let sum = 0
    const arr = Array.from(arguments)
    console.log(arr)
    for (const value of arguments) {
        sum += value
    }
    console.log(sum)
}

add(1, 2, 3, 4)
add(1, 2, 3, 4, 5)
add(1, 2, 3, 4, 5, 6)


Давайте спробуємо інший метод (Більш сучасніший, бо Array.from - уже не використовують):


function add() {
    let sum = 0
    const arr = [...arguments]
    console.log(arr)
    for (const value of arguments) {
        sum += value
    }
    console.log(sum)
}

add(1, 2, 3, 4)
add(1, 2, 3, 4, 5)
add(1, 2, 3, 4, 5, 6)




function foo() {
    console.log(arguments)
}

foo(5, 'Mango', true) // Number, Str, Bool

Тут є набір глобальних і локальнмх змінні. Бо воно є як і в середині, так і поза межами функції




Оператор return

Якщо ми використовуємо якусь функцію яка

function add() {
    let sum = 0;
    for (const value of arguments) {
        sum += value
    }
    console.log(sum);
}

add(1, 2, 3, 4)
add(1, 2, 3, 4, 5)
add(1, 2, 3, 4, 5, 6)

Але якщо ми хочемо далі отримувати ці значення поза кодом:



function add() {
    let sum = 0;
    for (const value of arguments) {
        sum += value
    }
    console.log(sum);
}

const response = add(1, 2, 3, 4, 5, 6)
console.log(response) // undefined, тобто значення нам не повернулося, для цього ми і використовуємо return:



function add() {
    let sum = 0;
    for (const value of arguments) { // 2. Вони прийшли сюди
        sum += value // 3. Додалися
    }
    console.log(sum);  // 4. Показали що вони додали, і у них вийшло 21
    return sum // 5. return нам відправляє готову відповідь: 21
}

const response = add(1, 2, 3, 4, 5, 6) // 1. Передаємо цифри до функції add
// 6. У response вернулося це 21
console.log(response) // 7. у консоль показався результат який прийшов до response, тобто 21



Тому якщо ми не пропишемо у функції return sum, але через змінну схочемо дізнатися результат - ми ЗАВЖДИ отримуватимемо undefined
Тобто якщо ви викликали якусь функцію і побачили undefined, значить ви забули вказати return
Але це також залежить від задачі, чи потрібно, чи ні.
Return вертає ЛИШЕ 1 значення.
У return є одна особливість - після нього нічого не може бути написано, тобто якщо ми після нього оголосимо будь яку змінну чи ще щось і законсолимо її, то ми її ніколи не побачимо, тобто:


function add() {
    let sum = 0;
    for (const value of arguments) {
        sum += value
    }
    console.log(sum);
    return sum

    const value = 10
    console.log(value) // МИ НІКОЛИ її не побачимо
}

const response = add(1, 2, 3, 4, 5, 6)
console.log(response)

Цікава ще одна річ:


function add() {
    let sum = 0;
    for (const value of arguments) {
        sum += value
        return sum
    }
}

const response = add(1, 2, 3, 4, 5, 6)
console.log(response) // 1

Але ж чому нам вернуло лише 1, а не 21? Тому що ми потрапили на return, 
і функція ОДРАЗУ ж припинила роботу, і вернула те що їй прийшло за перший раз, 
тобто 1, далі воно нічого не обробляло і не буде обробляти - НІКОЛИ!
Ось чому нам потрібно писати як у варіанті вище (тобто там ми кажемо:
    Виконай цикл, і верни результат, і тоді припиняй щось робити
    а тут у нас вийшло:
    Візьми першу цифру, припини роботу і верни те що вийшло (тобто 1))



Якщо вам потрібно щоб функція ЛИШЕ щось опрацювала, return можете не вказувати,
але якщо вам потрібно щоб вона вернула вам ОБРОБЛЕНИЙ результат, тоді return МУСИТЬ бути.



У нас можуть бути випадки коли ми можемо вказати пару return-ів, це називається: 'Патерн нумерраннього повернення', тобто:
Якщо ми хочемо по якійсь причині перервати функцію і вернути результат, тоді:


function largeNumber() {
    let sum = 0;
    for (const value of arguments) {
        sum += value
        if (sum > 10) {
            return true
        }
    }
    return false
}

console.log(largeNumber(1, 2, 3)) // false (6 > 10)
console.log(largeNumber(1, 2, 3, 4)) // false (10 > 10)
console.log(largeNumber(1, 2, 3, 4, 5)) // true (15 > 10)



Також ми можемо вказувати параметри за замовчуванням, для прикладу - ми точно знаємо що завжди прийде лише 2 значення і не більше, тому:

function add(val, val1) {
    return val + val1
}
console.log(add(3, 4)); // 7
console.log(add(5)); // NaN
console.log(add(11)); // NaN


=========================================================================

function add(val, val1) {
    console.log("val", val) // 3 | 5 | 11
    console.log("val1", val1) // 4 | undefined | undefined
    return val + val1
}
console.log(add(3, 4)); // 7
console.log(add(5)); // NaN
console.log(add(11)); // NaN

Давайте уникнемо цих NaN і undefined, і використаємо дефолтне значення:


function add(val, val1 = 0) {
    console.log("val", val) // 3 | 5 | 11
    console.log("val1", val1) // 4 | 0 | 0
    return val + val1
}
console.log(add(3, 4)); // 7
console.log(add(5)); // 5
console.log(add(11)); // 11

Тобто це виходить що ми кожемо, що val1 має дефолтне значення 0
Тобто якщо 2-ої цифри не буде, то ЗАВЖДИ підставляй 0.
І наше дефолтне значення може бути будь чим завгодно: рядком, цифрою, масивом і тд.
Але як правило у нас приймається найменше число, і найменшим числом у нас це є 0.
Розраховуємо на масив - пустий масив, Рядочок - пустий рядок і тд



ОБЛАСТІ ВИДИМОСТІ У ФУНКЦІЯХ:

№1

let a = 10

function foo() {
    a = 15
}

console.log(a) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                               Правильно: 10, , бо ми НЕ викликали функцію

























№2

let a = 10

function foo() {
    a = 15
}

foo()

console.log(a) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                               Правильно: 15, бо ми викликали функцію

























№3

let a = 10

function foo() {
    let a = 15
}

foo()
console.log(a) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                              Правильно: 10, (метод let - пригадай якщо не правильно відповів)

























№4

let a = 10

function foo() {
    let a = 15
    a = 45
}

foo()
console.log(a) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                              Правильно: 10, (метод let - пригадай якщо не правильно відповів)

























№5

let a = 10

function foo() {
    let a = 15
    a = 45
}

foo()
console.log(a) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                              Правильно: 10, (метод let - пригадай якщо не правильно відповів)

























№6

let a = 10

function foo() {
    a = 45
    let a = 15
}

foo()
console.log(a) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                              Помилка, (метод let - пригадай якщо не правильно відповів)

























№7

let a = 10

function foo(a) {
    a = 45
}

foo()
console.log(a) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                              Правильно: 10, тому що ми оголосили параметр (тобто створили як нову змінну тобто воно має такий вигляд: foo(let a;))

























№8

let a = 10

function foo(a) {
    a = 45
}

foo(a)
console.log(a) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                              Правильно: 10, тому що це глобальна 10

























№9

let a = 10

function foo(a) {
    a = 45
}

console.log(foo(a)) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                              Правильно: undefined, тому що ми попросили верни нам те що верне функція, а а вертає нам 10, а функція 45, тому воно не розуміє що ми хочемо у нас виходить let a = a; a = 45 - маячня!

























№10

const test = [1, 2, 3]

function foo(arr) {
    arr.splice(0, 1)
}

foo(test)
console.log(test) // Що ми отримаємо в даному випадку?                                                                                                                                                                                                                                                                                                              Правильно: 2, 3, це по суті як сказати: let arr = test а test в свою чергу = [1, 2, 3]

Метод splice(що хочемо вирізати, що хочемо підставити) - тобто замінити (зрощення)


Метод стак викликів

Іноді у нас є випадки коли нам потрібно обробити одні функції на результаті інших функцій, тобто:


function createString(name, year) {
    const res = add(year);
    return `Your name is ${name}, years: ${res}`
}

console.log(createString('Roman', [5, 10, 3]))


function add(arr) {
    let sum = 0
    for(const num of arr) {
        sum += num
    }
    return sum
}

1. Ми передали ім'я і [5, 10, 3] в createString, після чого у ній:
2. Ім'я зразу пішло в текст, а [5, 10, 3] пішли до функції add(year).
3. В функції add прийшли аргументи 5, 10 і 3, добавились. Далі функція вернула 18
4. Ці 18 пішли до функції createString де вернули у const res = 18
5. цей res пішов до return `Your name is ${name} years: ${res}`
6. Ми отримали: Your name is Roman years: 18.

Можете навіть зробити ось так, результат буде одинаковий:


function createString(name, year) {
    return `Your name is ${name}, years: ${add(year)}`
}

console.log(createString('Roman', [5, 10, 3]))


function add(arr) {
    let sum = 0
    for(const num of arr) {
        sum += num
    }
    return sum
}



Переповнення all Stack (весь стек)
Уявімо собі, що ми не уважні і ми маємо такий випадок:

function foo() {
    // 2. В середині неї викликали 2-гу функцію
    boo()
}
foo() // 1. І ми викликали першу функцію

function boo() {
    // 3. А тут викликали першу функцію
    foo()
}

І виходить що зараз ми бігаємо по кругу:
foo іде до foo у якому відпрацьовує boo а boo в свою чергу відпрацьовує foo і вертає йому щось - ЖАХ! Мене аж голова заболіла 🤕
І тут є мінус, що у нас ПК не зависне, а навпаки буде: Maximum call stack size exceeded (Перевищено максимальний розмір стека викликів)
Тобто це означає що наш call stack був переповнений, бо вони ідуть пол кругу і нічого не знімається (як запобіжник)
Тобто браузер розуміє що так багато функцій викликати - НЕ МОЖЛИВО! Ура! Тепер ми знатимо що означатиме ця помилка 😊, такщо тепер можемо не переживати якщо раптом так зробимо
*/

/*ТЕПЕР ПРАКТИКА 
№1 - Індекс маси тіла
1) Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
2) Вага та висота будуть СПЕЦІАЛЬНО передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
3) Індекс маси тіла необхідно округлити до однієї цифри після коми.

function calcBMI(weight, height) {
    // 1. Приводимо до єдиного значення, тобто все через . а не , (replace). А також ми приведемо це все в число (Number())
    weight = Number(weight.replace(',', '.'));
    height = Number(height.replace(',', '.'));

    // 2. Виконаємо цю умову: 'Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.' і виконаємо 'округлення до однієї цифри після коми'. І загорнемо це все у Number щоб отримати цифру а не str
    return Number((weight / Math.pow(height, 2)).toFixed(1));
    // АБО
    return Number((widht / height ** 2).toFixed(1))
}

const bmi = calcBMI('88,3', '1.75')
console.log(bmi) // 28.8




№1 - Індекс маси тіла
1) Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
2) Вага та висота будуть СПЕЦІАЛЬНО передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
3) Індекс маси тіла необхідно округлити до однієї цифри після коми.

function calcBMI(weight, height) {
    // 1. Приводимо до єдиного значення, тобто все через . а не , (replace). А також ми приведемо це все в число (Number())
    weight = Number(weight.replace(',', '.'));
    height = Number(height.replace(',', '.'));

    // 2. Виконаємо цю умову: 'Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.' і виконаємо 'округлення до однієї цифри після коми'. І загорнемо це все у Number щоб отримати цифру а не str
    return Number((weight / Math.pow(height, 2)).toFixed(1));
    // АБО
    return Number((widht / height ** 2).toFixed(1))
}

const bmi = calcBMI('88,3', '1.75')
console.log(bmi) // 28.8












№2 - Найменше з чисел
1) Напиши функцію min(a, b) яка повертає найменше з чисел а та b.

function min(a, b) {
    if(a > b) {
        return b
    }

    return a
}

console.log(min(2, 5)) // 2
console.log(min(3, -1)) // -1
console.log(min(1, 1)) // 1

Тепер зробимо все це саме через тернарку:

function min(a, b) {
    return a > b ? b : a
}

console.log(min(2, 5)) // 2
console.log(min(3, -1)) // -1
console.log(min(1, 1)) // 1









№3 - Площа прямокутника:
1) Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом

function getRectArea(dimensions) {
    // 1. Приводимо до масива
    dimensions = dimensions.split(' ');

    const first = Number(dimensions[0])
    const second = Number(dimensions[1])

    return first * second
}

console.log(getRectArea('8 11'))
console.log(getRectArea('46 12'))
console.log(getRectArea('2 112'))

Або інакше

function getRectArea(dimensions) {
    dimensions = dimensions.split(' ');
    return Number(dimensions[0] * dimensions[1])
}

console.log(getRectArea('8 11'))
console.log(getRectArea('46 12'))
console.log(getRectArea('2 112'))











№4 - Логування елементів:
1) Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде ввиводити в консоль повідомлення у форматі <номер елемента> - <назва елемента>. Нумерація елементів повинна починатися з 1.
Приклад:
['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, 2 - Poly, 3 - Ajax

function logItems(items) {
    for(let i = 0, num = 1; i < items.length; i += 1, num += 1) {
        console.log(`${num} - ${items[i]}`)
    }
}

logItems(['Mango', 'Poly', 'Ajax'])
logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])










№5 - Логування контактів:
1) Напиши функцію printContactsInfo(names, phones), яка виводить у консолі ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

function printContactsInfo(names, phones) {
    names = names.split(',')
    phones = phones.split(',')
    console.log('Names,', names, 'PHONES:', phones)

    for(let i = 0; i < names.length, i < phones.length; i += 1) {
        console.log(`${names[i]} - ${phones[i]}`)
    }
}

printContactsInfo('Mango,Poly,Ajax', '+380000000000,+380000000001,+380000000002')










№6 - Пошук найбільшого елемента:
1) Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві

function findLargestNumber() {
    // const arr = Array.from(arguments)
    const arr = [...arguments];
    let max = arr[0];
    for(const num of arr) {
        if(num > max) {
            max = num
        }
    }

    return max
}

console.log(findLargestNumber(2, 17, 94, 1, 23, 37))
console.log(findLargestNumber(49, 4, 7, 83, 12, 18))
console.log(findLargestNumber([1, 105, 1000, 9999],49, 4, 7, 83, 12, 18))

АБО:

function findLargestNumber(...arg) {
    let max = arg[0];
    for(const num of arg) {
        if(num > max) {
            max = num
        }
    }

    return max

}

console.log(findLargestNumber(2, 17, 94, 1, 23, 37))
console.log(findLargestNumber(49, 4, 7, 83, 12, 99))



А тепер уявімо собі такий випадок:
console.log(findLargestNumber([1, 105, 1000, 9999],49, 4, 7, 83, 12, 18))
Давайте подумаємо над його вирішенням:


function findLargestNumber() {
    let max;
    for(const num of arguments) {
        if(typeof num === 'number') {
            max = num;
            break;
        }
    }

    for(const num of arguments) {
        if(typeof num === 'number') {
            if(num > max) {
                max = num;
            }
        } else {
            max = findLargestNumber(...num)
        }
    }
    return max
}

console.log(findLargestNumber([1, 105, 1000, 9999, [10000000]],49, 4, 7, 83, 12, 18))












№7 - Середнє значення:
1) Напиши функцію calAverage(), яка приймає довільну кількість аргументів і повертає їхнє значення. Усі аргументи будуть лише числами.


function calAverage() {
    console.log(arguments);
    let total = 0;
    for(const num of arguments) {
        total += num;
    }
    console.log(total)
    return total / arguments.length
}

console.log(calAverage(1, 2, 3, 4)) // 2.5
console.log(calAverage(14, 8, 2)) // 8
console.log(calAverage(27, 43, 2, 8, 36)) // 23.2












№8 - Форматування часу:
1) Напиши функцію formatTime(minutes), яка переведе значення minutes у рядок у форматі годин та хвилин HH:MM.


function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

console.log(formatTime(70)) // "01:10"
console.log(formatTime(450)) // "07:30"
console.log(formatTime(1441)) // "24:01"











№9 - Колекція курсів (includes, indexOf, push і т.д.):
1) Напиши функцію для роботи навчальних курсів courses:

addCourses(name) - додає курс ДО КІНЦЯ КОЛЕКЦІЇ
removeCourses(name) - видаляє курс ІЗ КОЛЕКЦІЇ
updateCourses(oldName, newName) - змінює ім'я на нове



const courses = ['HTML', 'CSS', 'REACT', 'JavaScript', 'Express', 'PostgreSQL']

function addCourses(nameOfCourse) {
    if(courses.includes(nameOfCourse)){ // Якщо вже є такий курс з ім'ям
        return `${nameOfCourse} - Ви вже маєте такий курс`
    }

    courses.push(nameOfCourse)
}


// function removeCourses(nameOfCourse) {
//     if(courses.includes(nameOfCourse)){
//         const idx = courses.indexOf(nameOfCourse)
//         courses.splice(idx, 1);
//         return;
//     }

//     return `${nameOfCourse} - Немає у списку, тому видалення - НЕМОЖЛИВЕ`
// }


// !!~courses.indexOf(nameOfCourse)
function removeCourses(nameOfCourse) {
    const idx = courses.indexOf(nameOfCourse)
    if(!!~idx){
        courses.splice(idx, 1);
        return;
    }

    return `${nameOfCourse} - Немає у списку, тому видалення - НЕМОЖЛИВЕ`
}

function updateCourses(oldNameCourse, newNameCourse) {
    const idx = courses.indexOf(oldNameCourse);
    if(!!~idx) {
        courses.splice(idx, 1, newNameCourse)
        return;
    }

    return `${nameOfCourse} - курс з таким ім'ям не ІСНУЄ`
}



console.log(addCourses('Express'))
addCourses('Test')
console.log(courses) // ['HTML', 'CSS', 'REACT', 'JavaScript', 'Express', 'PostgreSQL']
removeCourses('CSS')
console.log(courses) // 'HTML', 'REACT', 'JavaScript', 'Express', 'PostgreSQL'
console.log(removeCourses('awdawdawd'))
updateCourses('Express', 'SQL')
console.log(courses) // 'HTML', 'REACT', 'JavaScript', 'SQL', 'PostgreSQL'

*/