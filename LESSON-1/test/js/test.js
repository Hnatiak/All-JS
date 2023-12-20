console.log("Hello World");

















// let value;
// console.log(value); // undefined
// value = 10
// console.log(value); // 10
// value = 100
// console.log(value); // 100
// value = "Hello World"
// console.log(value);



// console.log(3 === 5) // False (Number === Number)
// console.log(3 === "3") // False (Number === String)
// console.log(3 == "3") // True (Number === Number)



// console.log("mango".indexOf("nam")) // -1
// console.log("mango".indexOf("man")) // 0
// console.log("mango".indexOf(man)) // Error
// console.log(mango.indexOf(man)) // Error



// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean("true")); // true
// console.log(Boolean(false)); // false
// console.log(!!false) // false
// console.log(!!"false"); // true
// console.log(!!"true"); // true



// console.log(Number(25.7px)); // NaN
// console.log(Number(25.7px)); // Error
// console.log(Number(25.7)); // 25.7



// const a; // Error
// const a = 10; // 10
// a = 15; // Error

// let a; // undefined
// a = 10; // 10
// a = ' 15'; // 15
// console.log(a);

// const result = 108 + 223 - 2 * 5 // 321
// console.log(result);

// console.log(Math);
// const value = 27.5;
// console.log(Math.floor(value)); // 27



// const name = "Ivan";
// const age = 30;
// const result = name + ' years ' + age;
// console.log(result); // Ivan years 30

// const c = 10 + 22 + "11" + 44;
// console.log(c); // 321144
// console.log(typeof c); // string

// const value = 10
// const value_2 = '15'
// const res = value + value_2 // 1015
// const res_2 = value - Number(value_2) // -5
// const res_3 = value - value_2 // -5
// console.log(res, res_2, res_3);

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = companyName + ' ' + 'has' + ' ' + (repairBots + defenceBots) + ' ' + 'bots in stock'; // ЖАХ
// console.log(message);
// const message_2 = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock'; // Ні, не то - блін!
// console.log(message_2);
// const message_3 = `${companyName} has ${repairBots + defenceBots} bots in stock`; // ІДЕАЛЬНО
// console.log(message_3);



// let weight = '88,3';
// let height = '1.75';
// console.log(weight);
// weight = Number(weight.replace(',', '.'));
// console.log(weight);
// const bmi = weight / height;
// console.log(bmi);


// const incomingValue = 5;
// // let test;
// let test_2 = 0;
// console.log(test_2);
// const value = test_2 ?? 'some value'
// console.log(value);

// const incomingValue = 5;
// // const res = incomingValue + Number('qweqweqwe'); // NaN
// // const res = incomingValue + Number('500'); // 5
// console.log(res);
// const defaultValue = 1000;
// const value = res || defaultValue;
// const value_2 = res ?? defaultValue;
// console.log(value, value_2);









// const test = '';

// if (test) {
//     console.log('Hello');
// } else {
//     console.log('Bye');
// }


// const value = 5;

// if (value > 5) {
//     console.log(`${value} > 5`);
// } else if (value < 6) {
//     console.log(`${value} > 6`);
// } else if (value > 3) {
//     console.log(`${value} > 3`);
// } else {
//     console.log(`${value} <= 3`);
// }



// const result = 5 > 6 ? '5 is bigger' : '6 is bigger';

// PASSWORD = '1233456'
// password_user = '1233456'

// const check = PASSWORD === password_user ? 'success' : 'error'
// console.log(check)


// const res = 10 + 5;
// console.log(res);
// console.log(testValue)



// const value = 5;

// if(value === 1) {
//     console.log('1')
// } else if(value === 2) {
//     console.log('2')
// } else if(value === 3) {
//     console.log('3')
// } else if(value === 5) {
//     console.log('5') 
// } else {
//     console.log('Невідоме число')
// }

// switch(value) {
//     case 1: 
//         console.log('1')
//         break
//     case 2: 
//         console.log('2')
//         break
//     case 3: 
//         console.log('3')
//         break
//     case 5: 
//         console.log('5')
//         break
//     default: console.log('default')
// }

// А тепер відкрийте браузер, Sources / Джерела виберіть ваш файл з js і тепер опустіть до цього моменту з if та switch.
// І тепер виділіть там де є цифри всі if, else if, else і у switch виберіть всі case і default щоб воно виділило його жовтим кольором.
// А тепер просто понажимайте F11 на клавіатурі, і гляньте яка різниця )))
// Як ми бачимо для умови if, else if та else іде КОЖНА перевірка, а у switch зразу нас переносить туди куди нам потрібно
// Але на справді switch має певні границі, його можна використовувати лише з рядками або числами.
// Тобто: case 5 - 4: ... - Так робити НЕ МОЖНА, бо тоді він обробляє ВСІ кейси за кейсами, але можна робити так:


// switch(true) {
//     case 1 > 3: 
//         console.log('1')
//         break
//     case 2 < 5: 
//         console.log('2')
//         break
//     case 3 > 1: 
//         console.log('3')
//         break
//     case 5 < 6: 
//         console.log('5')
//         break
//     case 5 >= 6: // Але так робити не можна, тому що може виникнути помилка
//         console.log('5')
//         break
//     default: console.log('default')
// }

// Таким чином ми збережемо його натуру (тобто не перевіряти кожен кейс окремо)
// Також не можна писати так:

// const a = 2 + 5

// switch(a) {
//     case 5: 
//         console.log('5')
//         break
//     case 7: 
//         console.log('7')
//         break
//     case 6:
//         console.log('6')
//         break
//     default: console.log('default')
// }

// Тому запам'ятайте що switch ми використовуємо ЛИШЕ ДЛЯ строгого порівняння (===) ВСЕ
// Але можна робити так:

// const a = 'city'

// switch(a) {
//     case 'city': 
//         console.log('first case')
//         break
//     case 'name': 
//         console.log('second case')
//         break
//     case 'age':
//         console.log('third case')
//         break
//     default: console.log('default')
// }

// let a = 10;

// if(true) {
//     a = 15;
//     if(true) {
//         let a = 25
//     }
// }

// console.log(a)



// for(let i = 0; i < 5; i+=1) {
//     console.log(i) // 0 1 2 3 4
// }


// const str = 'hello world';

// for(let i = 0; i < str.length; i++) { // Індекс ЗАВЖДИ починається з 0 - ЗАВЖДИ!
//     console.log(str[i]) // h e (2)l o  w o r l d
// }

// const str = 'hello world'
// let i = 0;
// while(i < str.length) {
//     if(str [i] === 'w') {
//         console.log('I saw W')
//         // Тут можемо прописати break якщо хочемо щоб воно ПРИПИНИЛО (після того як знайде w) шукати або працювати далі.
//     }
//     console.log('no', str[i]);
//     i += 1;
// }


// const str = 'hello world'
// let i = 0;
// do {
//     if(str [i] === 'w') {
//         console.log('I saw W')
//         // Тут можемо прописати break якщо хочемо щоб воно ПРИПИНИЛО (після того як знайде w) шукати або працювати далі.
//     }
//     console.log('no')
//     i += 1;
// } while(i < str.length)


// const value = prompt('Яка офіційна назва JavaScript?')
// console.log(value)

// if(value === 'ECMAScript') {
//     alert('ПРАВИЛЬНО!')
// } else {
//     alert("Не знаєш? - ECMAScript")
// }


// const hours = 14;
// const minutes = 1;
// let timestring;

// if (minutes > 0) {
//     timestring = `${hours} год. ${minutes} хв.`;
// } else {
//     timestring = `${hours} год.`;
// }
// console.log(timestring)


// const userInput = Number(prompt('Введіть число' ))

// if (userInput > 0) {
//     console.log('Це позитивне число')
// } else if (userInput == 0) {
//     console.log('Це 0')
// } else if (userInput < 0) {
//     console.log('Це від\'ємне число')
// } else {
//     console.log('Це не цифра')
// }

// Або

// if (!userInput) {
//     console.log('Це 0')
// } else if (userInput > 0) {
//     console.log('Це позитивне число')
// } else if (userInput < 0) {
//     console.log('Це від\'ємне число')
// } else {
//     console.log('Це не цифра')
// }


// const userInput = Number(prompt('Введіть число' ))
// if(userInput % 2) {
//     console.log('Парне число')
// } else {
//     console.log('Не парне число')
// }

// АБО ЗРОБИМО ЧЕРЕЗ ТЕРНАРКУ:
// console.log(userInput % 2 ? "Не парне" : "Парне")


// const a = 120;
// const b = 180;

// if(a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a)
//     } else {
//         console.log(b)
//     }
// } else {
//     console.log(b + 512)
// }

// АБО ЗРОБИМО ЧЕРЕЗ ТЕРНАРКУ:

// if(a > 100 && b > 100) {
//     console.log(a > b ? a : b);
// } else {
//     console.log(b + 512)
// }


// let link = 'https://my-site.com/about';

// if(!link.endsWith('/')) {
//     link += '/'
// } else {
//     console.log('it\'s ok')
// }

// console.log(link)


// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes("my-site")) {
//     link += '/'
// } else {
//     console.log('it\'s ok')
// }

// console.log(link)



// console.log(link.includes('my-site') && !link.endsWith('/') ? link += '/' : link)


// const hours = 24;
// if (hours < 17) {
//     console.log("Pending")
// } else if (hours >= 17 && hours <= 24) { // Також можна так: else if (hours >= 17 || hours <= 24)
//     console.log("Expires")
// } else {
//     console.log("Overdue")
// }

// const deadline = 1

// if (!deadline) {
//     console.log("Сьогодні")
// } else if (deadline === 1) {
//     console.log("Завтра")
// } else if (deadline === 2) {
//     console.log("Після завтра")
// } else {
//     console.log("Дата у майбутньому")
// }

// АБО

// const deadline = 8;

// switch(deadline) {
//     case 0:
//         console.log("Сьогодні");
//         break;
//     case 1:
//         console.log("Завтра");
//         break;
//     case 2:
//         console.log("Після завтра");
//         break;
//     default:
//         console.log("Дата у майбутньому");
// }

// const max = 100;
// const min = 20;

// for(let i = min; i >= min && i <= max; i += 1) {
//     if(!(i % 5)) {
//         console.log(i)
//     }
// }


// const login = prompt('Введіть логін:')
// const pass = 'Я адмін'

// if (!login) {
//     alert('Я вас не знаю!')
// } else if (login === 'Адмін') {
//     const password = prompt('Введіть пароль:')
//     if (password === pass) {
//         console.log("Добрий день господарю!")
//     } else {
//         console.log("Не вірний пароль")
//     }
// } else {
//     console.log('Усе пішло не так!')
// }

// Або можна так:

const login = prompt('Введіть логін:')
// const pass = 'Я адмін'

// if (!login) {
//     alert('Скасовано')
// } else if (login === 'Адмін') {
//     const password = prompt('Введіть пароль:')
//     console.log(password === pass ? "Добрий день господарю!" : "Не вірний пароль")
// } else {
//     alert('Я вас не знаю!')
// }