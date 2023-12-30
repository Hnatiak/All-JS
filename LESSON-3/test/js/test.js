console.log("Hello World");


// const user = {
//     name: 'Artem',
//     age: 19,
//     languages: {
//         english: "B2+",
//         french: "A2+",
//         html: true,
//         css: false,
//         "React Native": false,
//         "React-Native": false,
//         "React_Native": false,
//         // or
//         // React_Native: false,
//     },
//     status: 'student',
// }

// console.log(user.languages)
// console.log(user.languages.css)
// console.log(user.languages.french)
// console.log(user.name)
// console.log(user.languages.React_Native)
// console.log(user['languages']["React Native"])


// for(const key in user) {
//     console.log(key) // Тут ми отримаємо список всіх наших ключів, але на ПОТОЧНІЙ вкладеності
//     console.log(user[key]) // Тут ми отримаємо список всіх наших ключів і поверхнесних, і не поверхневих
// }



// const user = {
//     name: 'Artem',
//     age: 19,
// }

// console.log(user.age)
// user.age = 29
// console.log(user.age)
// user.age += 1
// console.log(user.age)
// user.city = 'VN'
// console.log(user)
// // console.log(user.city)
// delete user.city
// console.log(user)


// const value1 = 2
// const value2 = 2

// const user = {
//     name: 'Artem',
//     age: 19,
//     [value1 + value2] : 'some value'
// }

// console.log(user)
// Object.freeze(user)
// user.iefhefwef = "uefhefefef"
// console.log(user)
// user.age = 100
// console.log(user.age)



// const user = {
//     name: 'Artem',
//     age: 18,
//     languages: {
//         english: "B2+",
//         french: "A2+",
//         html: true,
//         css: false,
//         "React Native": false,
//     },
// }

// const user2 = Object.create(user);
// // console.log(user2)
// user2.age = 33
// // console.log(user2)
// // for(const key in user2) {
// //     // console.log(key)
// //     console.log(user2[key])
// // }

// // for(const key in user2) {
// //     if(user2.hasOwnProperty(key)) {
// //         console.log(user2[key])
// //     }
// // }

// for(const key in user2) {
//     if(user2.hasOwnProperty(key)) {
//         console.log('Own: ', user2[key])
//     } else {
//         console.log('All: ', user2[key])
//     }
// }


// const user = {
//     score: 0,
// }

// if(user.score) {
//     console.log('yes')
// } else {
//     console.log('no')
// }

// if(user.hasOwnProperty('score')) {
//     console.log('yes')
// } else {
//     console.log('no')
// }


// if('score' in user) {
//     console.log('yes')
// } else {
//     console.log('no')
// }




// const user = {
//     name: 'Alex',
//     age: 28,
//     sayHello() {
//         console.log('Hello Hello Hello')
//     }
// }

// console.log(user)



// const user = {
//     name: 'Alex',
//     age: 28,
//     sayHello() {
//         console.log(this);
//     }
// }

// user.sayHello()



// const user = {
//     name: 'Alex',
//     age: 28,
//     sayHello() {
//         console.log(this)
//     }
// }

// const user2 = Object.create(user);
// user2.age = 100;
// // console.log(user2)
// console.log("User 1: ", user.sayHello())
// console.log("User 2: ", user2.sayHello())



// const user = {
//     name: 'Alex',
//     age: 28,
//     sayHello() {
//         console.log(`My name is: ${this.name} and I've: ${this.age}`) // Моє ім'я є (візьми з user це.ім'я)
//     }
// }

// const user2 = Object.create(user);
// user2.name = 'BOB';
// user2.age = 56;
// console.log("User 2:")
// console.log(user2.sayHello())
// console.log("User 1:")
// console.log(user.sayHello())



// const user = {
//     name: 'Alex',
//     age: 28,
//     languages: {
//         english: true,
//         french: true,
//         html: true,
//         css: false,
//         "React Native": false,
//     },
//     sayHello() {
//         console.log(`My name is: ${this.name} and I've: ${this.age}`)
//     },
//     iKnow() {
//         for(const key in this.languages) {
//             if(this.languages[key]) {
//                 console.log(`I know this langs: ${key}`)
//             }
//         }
//     }
// }

// console.log(user.iKnow())



// const user = {
//     name: 'Alex',
//     age: 28,
//     languages: {
//         english: true,
//         french: true,
//         html: true,
//         css: false,
//         "React Native": false,
//     },
//     sayHello() {
//         console.log(`My name is: ${this.name} and I've: ${this.age}`) // Моє ім'я є (візьми з user це.ім'я)
//     },
//     iKnow() {
//         const keys = Object.keys(this)
//         console.log(keys)

//         const values = Object.values(this)
//         console.log(values)

//         const entries = Object.entries(this)
//         console.log(entries)
//     }
// }

// user.iKnow()



// const user = {
//     name: 'Alex',
//     age: 28,
//     languages: {
//         english: true,
//         french: true,
//         html: true,
//         css: false,
//         "React Native": false,
//     },
//     sayHello() {
//         console.log(`My name is: ${this.name} and I've: ${this.age}`)
//     },
//     iKnow() {
//         const keys = Object.keys(this.languages)
//         console.log(keys)

//         const values = Object.values(this.languages)
//         console.log(values)

//         const entries = Object.entries(this.languages)
//         console.log(entries)
//     }
// }

// user.iKnow()



// const user = {
//     name: 'Alex',
//     age: 28,
//     languages: {
//         english: true,
//         french: true,
//         html: true,
//         css: false,
//         "React Native": false,
//     },
//     sayHello() {
//         console.log(`My name is: ${this.name} and I've: ${this.age}`)
//     },
//     iKnow() {
//         const keys = Object.keys(this.languages)
//         for(const key of keys) {
//             if(this.languages[key]) {
//                 console.log(key)
//             }
//             // console.log(this.languages[key])
//         }
//         // console.log(keys)
//     }
// }

// user.iKnow()





// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = false;
// console.log(user)
// const keys = Object.keys(user)
// console.log(keys)
// for(const key in user) {
//     console.log(user[key])
// }





// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// for(const key in salaries) {
//     sum += salaries[key]
//     // console.log(salaries[key])
// }

// console.log(sum)

// Другий метод:

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;
// const values = Object.values(salaries);
// console.log(values)
// for(const value of values) {
//     sum += value
//     console.log(value)
// }

// console.log(sum)





// const stones = [
//     {
//         name: 'Смарагд',
//         price: 1300,
//         quantity: 4,
//     },
//     {
//         name: 'Діамант',
//         price: 2700,
//         quantity: 3,
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7,
//     },
//     {
//         name: 'Щебінь',
//         price: 200,
//         quantity: 2,
//     },
// ]

// function calcTotalPrice(stones, stoneName) {
//     let sum = 0;
//     for(const stone of stones) {
//         // console.log(stone);
//         if(stone.name === stoneName) {
//             sum = stone.price * stone.quantity
//             break;
//         }
//         console.log(stone.name)
//     }
//     return sum
// }

// Або

// function calcTotalPrice(stones, stoneName) {
//     for(const stone of stones) {
//         if(stone.name === stoneName) {
//             return sum = stone.price * stone.quantity;
//         }
//     }
//     return 'Empty'
// }

// console.log(calcTotalPrice(stones, 'Діамант'))




// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// Object.freeze(Transaction)

// const account = {
//     balance: 0,

//     transactions: [],

//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type,
//         }
//     },

//     deposit(amount) {
//         if(amount <= 0) {
//             return 'Error'
//         }
//         const item = this.createTransaction(amount, Transaction.DEPOSIT)
//         console.log(item)
//         this.balance += amount
//         this.transactions.push(item)
//     },

//     withdraw(amount) {
//         if(amount > this.balance || amount <= 0) {
//             return 'Не достатньо коштів на рахунку, або сума більша ніж у вас на карточці'
//         }
//         const item = this.createTransaction(amount, Transaction.WITHDRAW)
//         // console.log(item);
//         this.transactions.push(item);
//         this.balance -= amount;
//     },
//     getBalance() {
//         return this.balance
//     },
//     getTransactionDetails(id) {
//         for(const transaction of this.transactions) {
//             if(transaction.id === id) {
//                 return transaction
//             }
//         }
//         return 'Такого id не існує'
//     },
//     getTransactionTotal(type) {
//         let sum = 0
//         for(const transaction of this.transactions) {
//             if(transaction.type === type) {
//                 sum += transaction.amount
//             }
//         }
//         return sum;
//     }
// }

// // console.log(account.createTransaction())
// // console.log(account.createTransaction(1000, 'deposit'))
// // account.deposit(1000)
// // account.deposit(5000)
// account.deposit(8000)
// // console.log(account)
// console.log(account.withdraw(1000))
// // console.log(account)
// console.log(account.getBalance())
// console.log(account.getTransactionDetails())
// console.log(account.getTransactionTotal())