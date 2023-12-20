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