console.log("Hello World");



// const arr = [1, 2, 3, 4];

// for(let i = 0; i < arr.length; i +=1) {
//     arr[i] = arr[i] * 2;
// }

// console.log(arr)



// function writeTitle(nameForTitle) {
//     return nameForTitle
// }

// console.log(writeTitle('А ТЕПЕР ГЛЯНЬ В КОНСОЛЬ - Зручно? )))'))



// const arr = [1, 2, 3, 4];
// const arr1 = [5, 6, 7, 8];
// const arr2 = [9, 10, 1, 11];

// function sum(arr) {
//     for(let i = 0; i < arr.length; i +=1) {
//         arr[i] = arr[i] * 2;
//     }
//     console.log(arr)
// }

// sum(arr) // 2, 4, 6, 8
// sum(arr1) // 10, 12, 14, 16
// sum(arr2) // 18, 20, 2, 22



// const sum1 = function() {
//     for(let i = 0; i < arr.length; i +=1) {
//         arr[i] = arr[i] * 2;
//     }
//     console.log(arr, 'Second')
// }

// sum1(arr) // 2, 4, 6, 8
// sum1(arr1) // 10, 12, 14, 16
// sum1(arr2) // 18, 20, 2, 22



// function add(val, val1, val2, val3) {
//     console.log(val, val1, val2, val3)
//     console.log(val + val1 + val2 + val3)
// }

// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5)
// add(1, 2, 3, 4, 5, 6)



// function add(val, val1, val2, val3, val4, val5) {
//     console.log(val, val1, val2, val3, val4, val5)
//     console.log(val + val1 + val2 + val3 + val4 + val5)
// }

// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5)
// add(1, 2, 3, 4, 5, 6)



// function add() {
//     console.log(arguments)
// }

// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5)
// add(1, 2, 3, 4, 5, 6)



// function add() {
//     let sum = 0
//     console.log(arguments)
//     for (let i = 0; i < arguments.length; i += 1) {
//         sum += arguments[i]
//     }
//     console.log(sum)
// }

// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5)
// add(1, 2, 3, 4, 5, 6)



// function add() {
//     let sum = 0
//     console.log(arguments)
//     for (const value of arguments) {
//         sum += value
//     }
//     console.log(sum)
// }

// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5)
// add(1, 2, 3, 4, 5, 6)



// function add() {
//     let sum = 0
//     const arr = Array.from(arguments)
//     console.log(arr)
//     for (const value of arguments) {
//         sum += value
//     }
//     console.log(sum)
// }

// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5)
// add(1, 2, 3, 4, 5, 6)



// function add() {
//     let sum = 0
//     const arr = [...arguments]
//     console.log(arr)
//     for (const value of arguments) {
//         sum += value
//     }
//     console.log(sum)
// }

// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5)
// add(1, 2, 3, 4, 5, 6)



// function foo() {
//     console.log(arguments)
// }

// foo(5, 'Mango', true)



// function add() {
//     let sum = 0;
//     for (const value of arguments) {
//         sum += value
//     }
//     console.log(sum);
//     return sum
// }

// const response = add(1, 2, 3, 4, 5, 6)
// console.log(response)



// function add() {
//     let sum = 0;
//     for (const value of arguments) {
//         sum += value
//         return sum
//     }
// }

// const response = add(1, 2, 3, 4, 5, 6)
// console.log(response)



// function largeNumber() {
//     let sum = 0;
//     for (const value of arguments) {
//         sum += value
//         if (sum > 10) {
//             return true
//         }
//     }
//     return false
// }

// console.log(largeNumber(1, 2, 3)) // false (6 > 10)
// console.log(largeNumber(1, 2, 3, 4)) // false (10 > 10)
// console.log(largeNumber(1, 2, 3, 4, 5)) // true (14 > 10)



// function add(val, val1) {
//     return val + val1
// }
// console.log(add(3, 4));
// console.log(add(5));
// console.log(add(11));



// function add(val, val1) {
//     console.log("val", val) // 3 | 5 | 11
//     console.log("val1", val1) // 4 | undefined | undefined
//     return val + val1
// }
// console.log(add(3, 4)); // 7
// console.log(add(5)); // NaN
// console.log(add(11)); // NaN



// function add(val, val1 = 0) {
//     console.log("val", val) // 3 | 5 | 11
//     console.log("val1", val1) // 4 | 0 | 0
//     return val + val1
// }
// console.log(add(3, 4)); // 7
// console.log(add(5)); // 5
// console.log(add(11)); // 11



// function createString(name, year) {
//     const res = add(year);
//     return `Your name is ${name}, years: ${res}`
// }

// console.log(createString('Roman', [5, 10, 3]))


// function add(arr) {
//     let sum = 0
//     for(const num of arr) {
//         sum += num
//     }
//     return sum
// }

// OR

// function createString(name, year) {
//     return `Your name is ${name}, years: ${add(year)}`
// }

// console.log(createString('Roman', [5, 10, 3]))

// function add(arr) {
//     let sum = 0
//     for(const num of arr) {
//         sum += num
//     }
//     return sum
// }





// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));
//     // return Number((weight / Math.pow(height, 2)).toFixed(1));
//     return Number((weight / height ** 2).toFixed(1));
// }

// const bmi = calcBMI('88,3', '1.75')
// console.log(bmi) // 28.8





// function min(a, b) {
//     if(a > b) {
//         return b
//     }
    
//     return a
// }

// console.log(min(2, 5)) // 2
// console.log(min(3, -1)) // -1
// console.log(min(1, 1)) // 1


// function min(a, b) {
//     return a > b ? b : a
// }

// console.log(min(2, 5)) // 2
// console.log(min(3, -1)) // -1
// console.log(min(1, 1)) // 1





// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');
//     const first = Number(dimensions[0])
//     const second = Number(dimensions[1])
//     return first * second
// }

// console.log(getRectArea('8 11'))
// console.log(getRectArea('46 12'))
// console.log(getRectArea('2 112'))


// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');
//     return Number(dimensions[0] * dimensions[1])
// }

// console.log(getRectArea('8 11'))
// console.log(getRectArea('46 12'))
// console.log(getRectArea('2 112'))





// function logItems(items) {
//     for(let i = 0, num = 1; i < items.length; i += 1, num += 1) {
//         console.log(`${num} - ${items[i]}`)
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])





// function printContactsInfo(names, phones) {
//     names = names.split(',')
//     phones = phones.split(',')
//     for(let i = 0; i < names.length, i < phones.length; i += 1) {
//         console.log(`${names[i]} - ${phones[i]}`)
//     }
// }

// printContactsInfo('Mango,Poly,Ajax', '+380000000000,+380000000001,+380000000002')





// function findLargestNumber() {
//     // const arr = Array.from(arguments)
//     const arr = [...arguments];
//     let max = arr[0];
//     for(const num of arr) {
//         if(num > max) {
//             max = num
//         }
//     }

//     return max
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37))
// console.log(findLargestNumber(49, 4, 7, 83, 12, 18))


// function findLargestNumber(...arg) {
//     let max = arg[0];
//     for(const num of arg) {
//         if(num > max) {
//             max = num
//         }
//     }

//     return max

// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37))
// console.log(findLargestNumber(49, 4, 7, 83, 12, 99))





// function findLargestNumber() {
//     let max;
//     for(const num of arguments) {
//         if(typeof num === 'number') {
//             max = num;
//             break;
//         }
//     }

//     for(const num of arguments) {
//         if(typeof num === 'number') {
//             if(num > max) {
//                 max = num;
//             }
//         } else {
//             max = findLargestNumber(...num)
//         }
//     }
//     return max
// }

// console.log(findLargestNumber([1, 105, 1000, 9999, [10000000]],49, 4, 7, 83, 12, 18))





// function calAverage() {
//     // console.log(arguments);
//     let total = 0;
//     for(const num of arguments) {
//         total += num;
//     }
//     // console.log(total)
//     return total / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4))
// console.log(calAverage(14, 8, 2))
// console.log(calAverage(27, 43, 2, 8, 36))





// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     minutes = minutes % 60;
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
// }

// console.log(formatTime(70)) // "01:10"
// console.log(formatTime(450)) // "07:30"
// console.log(formatTime(1441)) // "24:01"






// const courses = ['HTML', 'CSS', 'REACT', 'JavaScript', 'Express', 'PostgreSQL']

// function addCourses(nameOfCourse) {
//     if(courses.includes(nameOfCourse)){ // Якщо вже є такий курс з ім'ям
//         return `${nameOfCourse} - Ви вже маєте такий курс`
//     }

//     courses.push(nameOfCourse)
// }


// // function removeCourses(nameOfCourse) {
// //     if(courses.includes(nameOfCourse)){
// //         const idx = courses.indexOf(nameOfCourse)
// //         courses.splice(idx, 1);
// //         return;
// //     }

// //     return `${nameOfCourse} - Немає у списку, тому видалення - НЕМОЖЛИВЕ`
// // }

// function removeCourses(nameOfCourse) {
//     const idx = courses.indexOf(nameOfCourse)
//     if(!!~idx){
//         courses.splice(idx, 1);
//         return;
//     }

//     return `${nameOfCourse} - Немає у списку, тому видалення - НЕМОЖЛИВЕ`
// }

// function updateCourses(oldNameCourse, newNameCourse) {
//     const idx = courses.indexOf(oldNameCourse);
//     if(!!~idx) {
//         courses.splice(idx, 1, newNameCourse)
//         return;
//     }

//     return `${nameOfCourse} - курс з таким ім'ям не ІСНУЄ`
// }



// console.log(addCourses('Express'))
// addCourses('Test')
// console.log(courses) // ['HTML', 'CSS', 'REACT', 'JavaScript', 'Express', 'PostgreSQL']
// removeCourses('CSS')
// console.log(courses) // 'HTML', 'REACT', 'JavaScript', 'Express', 'PostgreSQL'
// console.log(removeCourses('awdawdawd'))
// updateCourses('Express', 'SQL')
// console.log(courses) // 'HTML', 'REACT', 'JavaScript', 'SQL', 'PostgreSQL'




















// const a = [1, 2, 3, 4, 5, 6]
// const b = "Mango"
// const message = "JavaScript - це цікаво";
// const words = ["JavaScript", "це", "цікаво"];
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const numbers = [];
// const numbers_two = [1, 2, 3, 4, 5];
// const scores = [1, 2, 3, 4, 5];
// const colors = ["red", "green", "blue"];
// const languages = ["C", "C++", "Java", "JavaScript"];
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// console.log(b.split("")) // ['M', 'a', 'n', 'g', 'o']
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// console.log(numbers_two.pop()); //  5
// console.log(numbers_two); // [1, 2, 3, 4]

// console.log(numbers_two.pop()); //  4
// console.log(numbers_two); // [1, 2, 3]

// console.log(numbers_two.pop()); //  3
// console.log(numbers_two); // [1, 2]

// console.log(numbers_two.pop()); //  2
// console.log(numbers_two); // [1]

// console.log(numbers_two.pop()); //  1
// console.log(numbers_two); // []

// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// const deletedScores = scores.splice(0, 3);
// console.log(scores); // [4, 5]
// console.log(deletedScores); // [1, 2, 3]
// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]
// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]
// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]


// console.log([7, 3, 8, 9, 2].splice(3))

// console.log([8, 5, 3, 9, 3].indexOf(3))

// console.log([8, 5, 3, 9, 3].indexOf(4))

// console.log(["JS", "is", "awesome!"].join(" "))

// console.log([2, 4, 6].concat([1, 3], [5]))


// const array = [1, "Hello", null, true, [1, 2, 3]]
// console.log(array)

// const firstElem = array[0] // Ось таак це виглядає
// console.log(firstElem) // 1

// const secondeElem = array[1] // Ось таак це виглядає
// console.log(secondeElem) // Hello

// console.log(array.length) // 5 - Порядковий номер
// const last = array[array.length - 1] // Ми отримаємо омтанній індекс
// console.log(last) // [1, 2, 3]



// for(let i = 0; i < array.length; i += 1) {
//     // console.log(i)
//     // Звертаємось до елемента по індексу, створимо лічильник:
//     console.log(array[i]);
//     // І тепер ми бачемо перебраний масив, Готово
// }


// for(let i = 0; i < array.length; i += 1) {
//     console.log(i)
//     console.log(array[i]);
//     if(Array.isArray(array[i])) {
//         for(let j = 0; j < array[i].length; j += 1) {
//             console.log(array[i][j]);
//         }
//         continue
//     }
//     console.log(array[i])
// }


// for(let i = 0; i < array.length; i += 1) {
//     const item = array[i]
//     if(Array.isArray(item)) {
//         for(let j = 0; j < item.length; j += 1) {
//             console.log(item[j]);
//         }
//         continue
//     }
//     console.log(array[i])
// }

// for(let item of array) {
//     if(typeof item === 'string') {
//         item = false
//     }
// }
// console.log('for of:', array);

// for(let i = 0; i < array.length; i += 1) {
//     if(typeof array[i] === 'string') {
//         array[i] = false
//     }
// }
// console.log('for:', array)



// let i = 0;

// while (i < array.length) {
//     // console.log(array[i]);
//     if (typeof array[i] === 'string') {
//         array[i] = false;
//     }
//     i += 1;
// }

// console.log('while:', array)



// let value = 1;
// let test = value;

// value += 10;
// console.log('value:', value, '|', 'test:', test)



// const array = [1, 2, 3, 4, 5];
// const copy = array;

// array.push(6, 7); // 1, 2, 3, 4, 5, 6, 7
// // copy.push(8, 9); // 1, 2, 3, 4, 5, 6, 7, 8, 9
// console.log('array:', array, '|', 'copy:', copy)



// console.log(1 === 1);
// console.log('hello' === 'hello');
// console.log([1, 2, 3] === [1, 2, 3]);

// const array = [1, 2, 3, 4, 5];
// const copy = array;
// console.log(array === copy);



const array = [1, 2, 3]
array.push(4)
console.log(array)
array.pop()
console.log(array)
array.length = 0
console.log(array)
console.log(Array.isArray(array));
