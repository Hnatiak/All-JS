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












// const arr = [1, 2, 3]; 
// const one = arr[0]; 
// const two = arr[1]; 
// const three = arr[2]; 
// console.log(one, two, three)


// const arr = [1, 2, 3]; 
// const [one, two, three] = arr;
// console.log(one, two, three)

// const arr = [1, 2, 3]; 
// const [_, two, three] = arr;
// console.log(two, three)

// const arr = [1, 2, 3]; 
// const [ , two, three] = arr;
// console.log(two, three)

// const user = {
//     name: 'Anyta',
//     age: 15,
//     skills: {
//         mind: 'Smart',
//         status: 'Filling in love',
//         advantage: 'Beauty',
//         haveABoy: true,
//         HighSchool: false,
//     }
// };


// const name = user.name;
// const age = user.age;
// const skills = user.skills;
// const haveABoy = user.skills.haveABoy

// // const {age, name} = user

// console.log(age, name)




// const user = {
//     name: 'Anyta',
//     age: 15,
// };

// const name = 'value';
// const age = 17;

// const {age : userAge, name : userName} = user;
// console.log(age, name, userName)





// const user = {
//     name: 'Anyta',
//     age: 15,
// };

// const name = 'value';
// const userName = 'valueTwo';
// const age = 17;

// const {age : userAge, name : nameUser} = user;
// console.log(age, name, userName, nameUser)





// const user = {
//     name: 'Anyta',
//     age: 15,
//     skills: {
//         js: true,
//         web: false,
//         python: true,
//     },
// };

// const {name, age, skills : { js }} = user
// console.log(js)




// const user = {
//     name: 'Anyta',
//     age: 15,
//     skills: {
//         js: true,
//         web: false,
//         python: true,
//         cars : {
//             audi: 'A6',
//             bmv: 'x5',
//         },
//     },
// };

// const {name, skills : { cars : { audi } }} = user
// console.log(audi)







// const user = {
//     name: 'Anyta',
//     age: 15,
//     skills: {
//         js: true,
//         web: false,
//         css: true,
//         cars : {
//             audi: 'A6',
//             bmv: 'x5',
//         },
//     },
// };



// const {name, skills: { js, web, css : sass, cars: { audi }}} = user
// console.log(js, web, sass, audi)





// const user = {
//     name: 'Anyta',
//     age: 15,
//     skills: {
//         js: true,
//         web: false,
//         css: true,
//         cars : {
//             audi: 'A6',
//             bmv: 'x5',
//         },
//     },
//     langs: [{ html : true}, {css: false}]
// };



// const { langs : [html, css] } = user
// console.log(html, css) // html, css

// const { langs : [html : {html}] } = user
// console.log(html)





// const user = {
//     name: 'Anyta',
//     age: 15,
//     skills: {
//         js: true,
//         web: false,
//         css: true,
//         cars : {
//             audi: 'A6',
//             bmv: 'x5',
//         },
//     },
//     langs: [{ html : true}, {css: false}]
// };

// for(const lang of user.langs) {
//     console.log(lang)
// }





// const users = [
//     {
//         name: 'User1',
//         langs: 'css',
//         car: {
//             audi: 'A8',
//             bmv: 'X5',
//         },
//     }, 
//     {
//         name: 'User2',
//         langs: 'html',
//         car: {
//             audi: 'x5',
//             bmv: 'X6',
//         },
//     },
//     {
//         name: 'User3',
//         langs: 'js',
//         car: {
//             audi: '2019',
//         },
//     },
// ]

// for(const {name} of users) {
//     console.log(name)
// }

// for(const {name, langs} of users) {
//     console.log(name, langs)
// }

// for(const {name, car : {audi}} of users) {
//     console.log(name, audi)
// }

// for(const {name, car : {audi : car}} of users) {
//     console.log(name, car)
// }

// for(const {name, car : {audi, bmv}} of users) {
//     console.log(name, audi, bmv)
// }

// for(const {name, car : {audi, bmv = 'Emm I don\'t know'}} of users) {
//     console.log(name, audi, bmv)
// }





// function foo({name, car: {bmw}}) {
//     console.log(name, bmw)
// }

// foo({ name: 'User', langs: 'html', car: { bmw: 'X5', audi: 'A6' }})


// function foo({name, car: {bmw = 'None' }}) {
//     console.log(name, bmw)
// }

// foo({ name: 'User', langs: 'html', car: { audi: 'A6' }})




// function foo({name, car: {bmw = 'Hmm, I don\'t know'} = {}}) {
//     console.log(name, bmw)
// }

// foo({ name: 'User', langs: 'html', car: { bmw: 'X5', audi: 'A6' }})
// foo({ name: 'User2', langs: 'css'})
// foo({ name: 'User3', langs: 'js', car: { audi: 'A6' }})





// function foo({name, car: {bmw = 'Hmm, I don\'t know'} = {}} = {}) {
//     console.log(name, bmw)
// }

// foo({ name: 'User', langs: 'html', car: { bmw: 'X5', audi: 'A6' }})
// foo({ name: 'User2', langs: 'css'})
// foo({ name: 'User3', langs: 'js', car: { audi: 'A6' }})
// foo()





// function foo({name = 'No name', car: {bmw = 'Hmm, I don\'t know'} = {}} = {}) {
//     console.log(name, bmw)
// }

// foo({ name: 'User', langs: 'html', car: { bmw: 'X5', audi: 'A6' }})
// foo({ name: 'User2', langs: 'css'})
// foo({ name: 'User3', langs: 'js', car: { audi: 'A6' }})
// foo()





// const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];
// const min = Math.min(...arr)
// console.log(min)





// const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];
// const arr1 = arr
// console.log(arr1 === arr)





// const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];
// const arr1 = [...arr];
// arr1.splice(0, 1);
// console.log(arr === arr1);





// const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];
// const [first, ...props] = arr;
// console.log(props);





const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];
const [first, ...props] = arr;
console.log(props); // false

for(let i = 0; i < props.length; i += 1) {
    props[i] *= first
}

console.log(props)