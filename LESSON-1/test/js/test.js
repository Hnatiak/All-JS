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