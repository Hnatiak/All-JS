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


























/* Основи об'єктів/Об'єкти (один із самих популярних тип даних)
Для того щоб створити об'єкт (має ГЛОБАЛЬНУ область видимості), нам потрібно в змінну присвоїти ЛІТЕРАЛ об'єкта,
для прикладу створимо змінну user і для неї присвоїмо в ній:
літерал об'єкта (тобто фігурні дужки - {})
літерал масива (тобто квадратні дужки - [])

У нашому випадку ми використаємо літерал об'єкта:

const user = {}

У середину цього об'єктного літералу ми можемо (таксамо як і в масиві - але там вони зберігаються індекс і значення елемента, а тут (в об'єкті) в парі ключ та значення) зберегти якийсь ключ і його значення, для прикладу:
Давайте створимо ключ name і його значення "Artem"


const user = {
    name: 'Artem'
}

Після назви ключа ми ставимо : крапки і присвоюємо значення,
якщо у нас є певний випадок коли нам мало одного значення і нам
потрібно їх більше, тоді ми ОБОВ'ЯЗКОВО ставимо , і пишемо інший
ключ і його значення:

const user = {
    name: 'Artem',
    age: 19,
    work: null,
    status: 'student',
    favoriteNumbers: [23, 12, 465]
}

Тобто як бачите в ключах ми можемо зберігати БУДЬ ЩО! Навіть функції
ВКЛАДЕНІСТЬ:
Якщо у нас є певни вкладеність у нашому об'єкті, ми так само
створюємо ключ 
Для прикладу:


const user = {
    name: 'Artem',
    age: 19,
    languages: {
        english: "B2+",
        french: "A2+",
        html: true,
        css: false,
    },
    status: 'student',
}

Але пам'ятайте що назву ключа ми НЕ МОЖЕМО ПОЧИНАТИ ЧИСЛА! Тобто:
 
2React: false   ❌
#React: false   ❌
"React": true   ✅
"React Native": true    ✅

Але як нам звертатися до якоїсь властивості? Все дуже просто, нам потрібно
вказати об'єкт з якого ми хочемо дістати властивість (user), потім ставимо 
крапку і пишемо назву ключа (але яка 100% є присутня) для прикладу languages:

const user = {
    name: 'Artem',
    age: 19,
    languages: {
        english: "B2+",
        french: "A2+",
        html: true,
        css: false,
        "React Native": false,
    },
    status: 'student',
}

console.log(user.languages)

Також ми можемо полинути ще глибше:

console.log(user.languages.css)
console.log(user.languages.franch)
console.log(user.name)

І тд

І в результаті ми маємо це значення яке зберігалося в нашому ключі.
Але як нам глянути "React Native": false?
В такому випадку можна вважати що ключ є створений, але він не є валідний (не підтримується),
тому що ми не можемо до нього дістатися через крапку, тобто написати так не вийде:

console.log(user.languages.React Native)    ❌
console.log(user.languages.React, Native)   ❌
console.log(user.languages."React Native")  ❌

Але ми можемо зробити ось так (використовуючи - або _):

"React_Native": false, або "React-Native": false,

console.log(user.languages.React_Native)

Або ми можемо зробити ось так:

console.log(user['languages']["React Native"])   ✅

Але бажано такого не робити (React Native), тому пишіть як омога простіше.


А тепер давайте спробуємо ПЕРЕБРАТИ об'єкт:



const user = {
    name: 'Artem',
    age: 19,
    languages: {
        english: "B2+",
        french: "A2+",
        html: true,
        css: false,
        "React Native": false,
    },
    status: 'student',
}

for(const key in user) {
    console.log(key) // Тут ми отримаємо список всіх наших ключів, але на ПОТОЧНІЙ вкладеності
    console.log(user[key]) // Тут ми отримаємо список всіх наших ключів і поверхнесних, і не поверхневих
}

А тепер давайте розглянемо чому ж його не перебирають методом for ... of ...?, хоча така можливість є:

for(const key of user) {
    console.log(key) // Помилка, тому що воно каже що користувач не ітерабельний (тобто його неможливо зчитати)
}

Давайте спробуємо через let:

for(const key of user) {
    console.log(key) // Помилка, тому що воно каже що користувач не ітерабельний (тобто його неможливо зчитати)
}

У даному випадку воно просто не хоче перебирати, тому що знає що цикл for ... of ... не є призначений для цього.
Але все ж таки з певними методами нам може вдасться це перебрати, але це точно нічим добрим НЕ ЗАКІНЧИТЬСЯ!






Тепер давайте розглянемо яким чином ми можемо присвоїти значення в об'єкт,
яким чином ми можемо змінити його, видалити або ж заборонити:


Уявімо собі випадок коли нам потрібно щось змінити, для прикладу рік:

const user = {
    name: 'Artem',
    age: 19,
}

Для цього ми створюємо звернення до нашого об'єкта, вказуємо назву ключа (до якого ми хочемо звернутися), далі ми можемо скористатися оператором = і вказати чосло:

user.age = 29

Або ми можемо використати оператор +=, тобто взяти попереднє значення і проапдейтити (поновити)

user.age += 1 // 19 + 1 = 20


А якщо нам потрібно ДОБАВИТИ якусь властивість в об'єкт? Робимо все те саме:


user.city = 'VN'

А як видалити ключ? (досить рідкісний випадок)
Для цього використовуємо метод delete

delete user.city

Але якщо ми напишемо delete user - то нічого не відбудеться, тому що ми не можемо видалити повністю весь об'єкт, лише по 1 ключу за одну операцію
Давайте спробуємо створити математичну задачу (цього робити не варто, але просто для прикладу):


const value1 = 2
const value2 = 2

const user = {
    name: 'Artem',
    age: 19,
    [value1 + value2] : 'some value'
}

console.log(user)

Але відреагувати ми його не зможемо.
Але як нам заборонити змінювати об'єкт? Для цього є метод freeze()
Він ЗАБОРОНЯЄ БУДЬ ЯКУ ЗМІНУ нашого об'єкта:

Object.freeze(user)
user.iefhefwef = "uefhefefef"
console.log(user)
user.age = 100
console.log(user.age)

Але розморозити не можна








Тепер давайте глянемо що таке Власна і НЕ Власна властивість і що таке власний об'єкт?
Давайте створимо того самого user:

const user = {
    name: 'Artem',
    age: 18,
    languages: {
        english: "B2+",
        french: "A2+",
        html: true,
        css: false,
        "React Native": false,
    },
}

Якщо ми самостійно руками прописали свого користувача, або ми його звідкись отримали, то це ВЛАСНИЙ об'єкт
а НЕ ВЛАСНИЙ об'єкт це коли на основі даного об'єкта (user) був створений інший об'єкт, для прикладу:

const user2 = Object.create(user);
console.log(user2)

Здається що він начебто пустий, але це не так. У нас пішов прототипний зв'язок (ми вчитимемо його трошки пізніше), але ми можемо інакше перевірити:

user2.age = 33

Ми хоть і перестворили age але на справді у нас є і age 33 і age 28, тобто це те що було у мене унаслідуване (тобто він просто іде в комірку користувача)

А тепер спробуємо його розібрати і перебрати:

for(const key in user2) {
    console.log(key)
    console.log(user2[key]) // У такому випадку ми побачимо 33 - власні, а name і languages будуть унаслідувані
}

А як ми можемо дістати лише ВЛАСНІ властивості, а не всі? Дуже просто:

for(const key in user2) {
    if(user2.hasOwnProperty(key)) {
        console.log(user2[key])
    }
}

І ми отримаємо лише 33, тобто ми запитуємо у нього які він має ВЛАСНІ властивості (у його випадкому це age, тому ми побачимо просто 33)

for(const key in user2) { // Тут ми пишемо: що з user2 візьми ВСІ ключі
    if(user2.hasOwnProperty(key)) {   // Тут ми пишемо: що якщо user2 має власні властивості, то покажи нам їх
        console.log('Own: ', user2[key])
    } else {   // Тут ми пишемо: що якщо user2 має якісь внесені/змінені властивості, то покажи нам їх
        console.log('All: ', user2[key])
    }
}


А як дізнатися чи взагалі є цей ключ в об'єкті?

const user = {
    score: 0,
}

if(user.score) {
    console.log('yes')
} else {
    console.log('no')
}

Але ми чомусь побачимо no хоча такий ключ є, хмм треба пофіксити. Давайте спробуємо кращий приклад:
1 ПРИКЛАД:

const user = {
    score: 0,
}

if(user.hasOwnProperty('score')) {
    console.log('yes')
} else {
    console.log('no')
}

Але в такому випадку ми ОБОВ'ЯЗКОВО вказуємо назву ключа як рядок (str)
Але як нам дізнатися чи взагалі є будь яка властивість, власна чи успадкована, просто щоб знати які є і все?:

if('score' in user) {
    console.log('yes')
} else {
    console.log('no')
}


Тобто hasOwnProperty покаже ТІЛЬКИ ВЛАСНИЙ, а in - будь який















Що таке метод об'єкту?
Метод об'єкту - це повна та ж сама функція, але вона знаходиться в середині об'єкта, ось так:


const user = {
    name: 'Alex',
    age: 28,
    sayHello() {
        console.log('Hello Hello Hello')
    }
}

Але при використанні методів об'єкту ми повинні пам'ятати 1 золоте правило:
Ми працюємо з нашим об'єктом user і коли ми звертаємось об'єкта user в середині sayHello()
(тобто ми хочемо дістати або значення name, age, etc.) ми звертаємось до user 
через this. Ось приклад:

const user = {
    name: 'Alex',
    age: 28,
    sayHello() {
        console.log(this)
    }
}

const user2 = Object.create(user); // Створюємо копію як у user (Тобто всі властивості які є у user будуть в user2)
user2.age = 100;
console.log(user2)

// Запам'ятайте, що просто так викликати метод: sayHello() - ми не можемо, ми ЗАВЖДИ маємо вказати шлях звідки ми викликаємо цей метод, тому:

console.log("User 2:")
console.log(user2.sayHello())
console.log("User 1:")
console.log(user.sayHello())

Для того щоб запам'ятати ким буде ось цей this, в методі об'єкту, потрібно завжди пам'ятати просте правило - той хто нас викликав, тобто:
ми викликали user2 нам вивели його об'єкт (user2.age = 100), ми викликали user, нам вернуло все що є в користувачі (бо ми не вказували що саме має вернути нам метод)
Тобто хто нас перший викликав, то для того буде виконуватися this.



Давайте підставимо в метод ім'я нашого користувача:



const user = {
    name: 'Alex',
    age: 28,
    sayHello() {
        console.log(`My name is: ${this.name} and I've: ${this.age}`) // Моє ім'я є (візьми з user це.ім'я)
    }
}

const user2 = Object.create(user);
user2.name = 'BOB';
user2.age = 56;
console.log("User 2:")
console.log(user2.sayHello()) // BOB, 56
console.log("User 1:")
console.log(user.sayHello()) // Alex, 28






Сам об'єкт обмежень - немає, скільки методів нам потрібно чи властивостей, стільки і створюємо. Ми навіть можемо робити їх вкладеними (тобто прописати який метод в ключі), ось приклад:


const user = {
    name: 'Alex',
    age: 28,
    languages: {
        english: true,
        french: true,
        html: true,
        css: false,
        "React Native": false,
    },
    sayHello() {
        console.log(`My name is: ${this.name} and I've: ${this.age}`) // Моє ім'я є (візьми з user це.ім'я)
    },
    iKnow() {
        for(const key in this.languages) {
            if(this.languages[key]) // Перевіряємо що якщо цей ключ у languages вертає true (тобто є позитивний), тоді ми його випишемо
            console.log(`I know this langs: ${key}`)
        }
    }
}

console.log(user.iKnow())



Але є декілька кращих методів щоб перебрати об'єкт (3 метода), представляю вам: Object.keys(назва об'єкта з якого хочемо дістати ключі), Object.values(назва об'єкта з якого хочемо дістати ключі) та Object.entries(назва об'єкта з якого хочемо дістати ключі). Давайте розглянемо кожен з них


1. Створимо 3 змінних: const keys, const values, const keys3

const user = {
    name: 'Alex',
    age: 28,
    languages: {
        english: true,
        french: true,
        html: true,
        css: false,
        "React Native": false,
    },
    sayHello() {
        console.log(`My name is: ${this.name} and I've: ${this.age}`) // Моє ім'я є (візьми з user це.ім'я)
    },
    iKnow() {
        const keys = Object.keys(this)
        console.log(keys) // ['name', 'age', 'languages', 'sayHello', 'iKnow']

        const values = Object.values(this)
        console.log(values) // ['Alex', 28, {english: true, french: true, html: true, css: false, React Native: false}, ƒ, ƒ]

        const entries = Object.entries(this)
        console.log(values) // [Array(2), Array(2), Array(2), Array(2), Array(2)] in Array: (2) ['name', 'Alex'], (2) ['age', 28], (2) ['languages', {…}], (2) ['sayHello', ƒ], (2) ['iKnow', ƒ]
    }
}

user.iKnow()







А тепер давайте напишемо для них усіх умову:

const user = {
    name: 'Alex',
    age: 28,
    languages: {
        english: true,
        french: true,
        html: true,
        css: false,
        "React Native": false,
    },
    sayHello() {
        console.log(`My name is: ${this.name} and I've: ${this.age}`) // Моє ім'я є (візьми з user це.ім'я)
    },
    iKnow() {
        const keys = Object.keys(this.languages)
        console.log(keys) // ['english', 'french', 'html', 'css', 'React Native']

        const values = Object.values(this.languages)
        console.log(values) // [true, true, true, false, false]

        const entries = Object.entries(this.languages)
        console.log(entries) // Array(2), Array(2), Array(2), Array(2), Array(2) in Array: ['english', true], (2) ['french', true], (2) ['html', true], (2) ['css', false], (2) ['React Native', false]
    }
}

user.iKnow()


Які можливості у Object.keys()?:
    1. він ЗАВЖДИ вертає власні назви, тобто якби у нас об'єкт був би успадкований, то значенняб ми від нього не отримали б.
    2. Він дозволяє нам працювати з нашим об'єктом потипу як ми працюємо з масивом, тому що він вже в результаті свого виконання повертає нам масив

Які можливості у Object.values()?:
    1. Допомагає нам отримати ПОВНІСТЮ все значення ключа (чи це цифра, чи це str чи bool чи функція і тд), ми побачимо лише значення ключа але не його назву

Які можливості у Object.entries()? (Майже ніколи не використовується):
    1. Фактично - це двух-вимірний масив, перший рівень це 1 великий глобальний всі інші це комбінація - ключ та значення









А тепер давайте ще раз переберемо його (але лише 1 методом):

const user = {
    name: 'Alex',
    age: 28,
    languages: {
        english: true,
        french: true,
        html: true,
        css: false,
        "React Native": false,
    },
    sayHello() {
        console.log(`My name is: ${this.name} and I've: ${this.age}`) // Моє ім'я є (візьми з user це.ім'я)
    },
    iKnow() {
        const keys = Object.keys(this.languages)                        // 1
        for(const key of keys) {
            if(this.languages[key]) {
                console.log(key) // english, french, html
            }
            console.log(this.languages[key])
        }
        console.log(keys)
    }
}

user.iKnow()











№1 - Основи об'єктів
Напиши скрипт, який для об'єкта user, послідовно:
    додає поле mood за значенням 'happy'
    замінює значення hobby на 'skydiving'
    замінює значення premium на false
    виводить вміст об'єкта user у форматі ключ: значення, використовуючи Object.keys() та for ... of ...

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

user.mood = 'happy';
user.hobby = 'skydiving';
user['premium'] = false;
console.log(user)
const keys = Object.keys(user)
console.log(keys)
for(const key in user) {
    console.log(user[key])
}

Давайте ще створимо один об'єкт для користувача:
user.skills = {
    run: true
}

// Найбільше застосовують for ... in ... ніж for ... of ...




















№2 - Метод Object.values()
У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумування всіх зарплат і збережіть результат у змінній sum. Має вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = 0;

for(const key in salaries) {
    sum += salaries[key]
    // console.log(salaries[key])
}
console.log(sum)

// Другий метод:

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = 0;
const values = Object.values(salaries);
console.log(values)
for(const value of values) {
    sum += value
    console.log(value)
}
console.log(value)



















№3 - Масив об'єктів
Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта.

const stones = [
    {
        name: 'Смарагд',
        price: 1300,
        quantity: 4,
    },
    {
        name: 'Діамант',
        price: 2700,
        quantity: 3,
    },
    {
        name: 'Сапфір',
        price: 400,
        quantity: 7,
    },
    {
        name: 'Щебінь',
        price: 200,
        quantity: 2,
    },
]

function calcTotalPrice(stones, stoneName) {
    let sum = 0;
    for(const stone of stones) {
        // console.log(stone);
        if(stone.name === stoneName) {
            sum = stone.price * stone.quantity
            break; // робимо break, тому що вийде що воно також покаже нам остальні смарагди, чого нам не потрібно
        }
    }
    return sum
}

// Або:

function calcTotalPrice(stones, stoneName) {
    for(const stone of stones) {
        if(stone.name === stoneName) {
            return sum = stone.price * stone.quantity;
        }
    }
    return 'Empty' // Робимо дефолтне значення, щоб нам при невідомій руді не вертало undefined, а 'Empty'
}

console.log(calcTotalPrice(stones, 'Діамант'))




















№4 - Комплексні завдання
Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій

Типів транзакцій лише два: Можна покласти або зняти гроші з рахунку.

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

Object.freeze(Transaction)

// Кожна транзакція - об'єкт із властивостями: id, type та amount

const account = {
    // Поточний баланс рахунку:
    balance: 0,

    // Історія транзакцій
    transactions: [{id: 1703968423046, amount: 8000, type: 'deposit'}],

    // Метод створює та повертає об'єкт транзакції. Приймає суму та тип транзакції
    createTransaction(amount, type) {
        return {
            id: Date.now(),
            amount,
            type,
        }
    },

    // Метод що відповідає за додавання суми до балансу. Приймає суму транзакції. Викликає createTransaction для створення об'єкта транзакції, після чого додає його до історії транзакцій.
    deposit(amount) {
        if(amount <= 0) {
            return 'Error'
        }
        const item = this.createTransaction(amount, Transaction.DEPOSIT)
        console.log(item)
        this.balance += amount
        this.transactions.push(item)
    },

    // Метод, що відповідає за зняття суми з балансу. Приймає суму транзакцій, викликає createTransaction для створення об'єкта транзакції після чого додає його до історії транзакцій. Якщо amount більше ніж поточний баланс, виводь повідомлення про те що зняття такої суми не можливе, недостатньо коштів.
    withdraw(amount) {
        if(amount > this.balance || amount <= 0) {
            return 'Не достатньо коштів на рахунку, або сума більша ніж у вас на карточці'
        }
        const item = this.createTransaction(amount, Transaction.WITHDRAW)
        console.log(item)
        this.transactions.push(item);
        this.balance -= amount
    },
    // Метод повертає поточний баланс:
    getBalance() {
        return this.balance
    },

    // Метод шукає та повертає об'єкт транзакції по id
    getTransactionDetails(id) {
        for(const transaction of this.transactions) {
            if(transaction.id === id) {
                return transaction
            }
        }
        return 'Такого id не існує'
    },
    // Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій
    getTransactionTotal(type) {
        let sum = 0
        for(const transaction of this.transactions) {
            if(transaction.type === type) {
                sum += transaction.amount
            }
        }
        return sum;
    }
}

// console.log(account.createTransaction())
console.log(account.createTransaction(1000, 'deposit'))
account.deposit()

1. Створимо об'єкт із властивостями: id, type та amount.
    Ідемо до createTransaction(amount, type) {}
    Пишемо що буде вертати (return) об'єкт із id
    Перевіримо його через консоль: console.log(account.createTransaction()) (мені повернуло: 1703965236577, вам може щось інше)
    Створюємо одноімені ключі (мається на увазі що коли ми назву змінної підставляємо як значення, а значення змінної як значення ключа (amount, type))
    Перевіримо його через консоль: console.log(account.createTransaction(1000, 'deposit')) - Все чудово працює, рухаємось далі

2. Заборонимо для Transaction вносити зміни методом freeze (Object.freeze(Transaction))

3. Ідемо до deposit(amount) {}
    Викликаємо createTransaction для створення об'єкту транзакцій. Для цього створимо змінну item
    Пишемо що він має приймати наш createTransaction ((amount, Transaction.DEPOSIT))
    Викличемо функцію: account.deposit(1000)
    Законсолимо: console.log(item)
    Робимо опрацьовування що якщо користувач введе 0 або -1000, тощо, то йому поверне інший результат: Error
    Консолимо: console.log(account.deposit(тут пишемо цифри які хочемо))
    Прописуємо код який добавить наш транзакцію до історії. ((this.transactions.push(item))
    Консолимо: console.log(account) у мене вернуло ось таке:
    Стрілка вниз, transactions:
        0: {id: 1703966711854, amount: 1000, type: 'deposit'}
    Також обновлюємо сам баланс користувача: this.balance += amount
    Усе працює - їдемо далі

4. Ідемо до withdraw(amount) {}
    Робимо перевірку що якщо користувач ввів більшу суму ніж на балансі, чи мінусуве число чи 0 то йому поверне помилку
    Далі створюємо const item у який пишемо що він має зняти з балансу цю суму яку хоче користувач: const item = this.createTransaction(amount, Transaction.WITHDRAW)
    Консолимо item: console.log(item)
    Пишемо умову яка зніматиме з рахунку гроші: this.balance -= amount
    Усе працює - їдемо далі

5. Ідемо до getBalance() {}
    Пишемо повернення поточного балансу: return this.balance
    Консолимо console.log(account.getBalance())
    Усе працює - їдемо далі

6. Ідемо до getTransactionDetails(id) {}
    Допишемо до transactions - {id: 1703968423046, amount: 8000, type: 'deposit'}, щоб перевірити чи все працює
    Перебираємо масив методом for ... of ... і перевіряємо чи є у нас це id по якому ми шукаємо інформацію
    Пишемо щоб повернуло в іншому випадку помилку
    Консолимо: console.log(account.getTransactionDetails(1703968423046))
    Все працює - ідемо далі

7. Ідемо до getTransactionTotal(type) {}
    Перебираємо масив методом for ... of ... і перевіряємо чи є у нас цей type по якому ми шукаємо інформацію
    Далі створюємо let sum = 0, тому що у нас просять: повертає кількість коштів певного типу транзакції і в перевірку if пишемо: sum += transaction.amount (тобто ми в історії transaction хочемо добавити всі суми (amount))
    Повертаємо sum
    Консолимо: console.log(account.getTransactionTotal(Transaction.WITHDRAW)) або console.log(account.getTransactionTotal(Transaction.DEPOSIT))
    Все працює - КІНЕЦЬ

8. Що буде виведено в консоль:

const user = {
    email: "mango@mail.com",
    age: 20,
}

const { email: userEmail } = user;
console.log(email); // ???                                                                                                                                                                                                                                                                                                              Помилка, бо ми по суті переіменували з властивості email на userEmail, тобто після чого по суті email - не існує більше, а є userEmail







function foo({ username } = {}) {
    console.log(username) // ???                                                                                                                                                                                                                                                                                                       undefined, тому що ми нічого не передали у саму функцію
}

foo();





function foo({ a, b, c, ...props }) {
    console.log(props) // ???                                                                                                                                                                                                                                                                                                          {d: 4, e: 5}, тому що ...props (тобто це операція rest - остальне) втягує все у себе все що залишилося після неї
}

foo({ a: 1, b: 2, c: 3, d: 4, e: 5 });






function foo({ a, b, c, ...args }) {
    console.log(args) // ???                                                                                                                                                                                                                                                                                                           [4, 5], тому що ...args (передає усе в масив) втягує все у себе все що залишилося після неї
}

foo(1, 2, 3, 4, 5);

*/





































/* 
ДЕСТРУКТИЗАЦІЯ МАСИВА

Уявімо собі ситуацію що нам потрібно дістати якесь значення з нашого масиву (для прикладу 1-цю, 2-ку і 3-ку)
мабуть перше щоб ми зробили б це створилиб змінну const one, two, three і пішли б зверталися до даного масиву по  його індексу:

const arr = [1, 2, 3]; 
const one = arr[0]; 
const two = arr[1]; 
const three = arr[2]; 
console.log(one, two, three)

Використовуючи диструктиризацію ми можемо відійти від звернення за індексом, це робиться так:
Ми можемо створити диструктизацію масива і прописати в середині квадратних дужок назву змінної і вказати з чого ми дістаємо (тобто з нашого масиву):

const arr = [1, 2, 3]; 
const [one, two, three] = arr;
console.log(one, two, three)

Як ви бачите, що мабуть нічого не змінилося. Але за допомогою ось такої умови-операції ми можемо дещо зекономити наш код в майбутньому.
Для прикладу якщо нам було б потрібно дістати перше, друге і третє значення з масиву, то у попередньому випадку нам би прийшлося б створити 3 константи і в кожному прописувати arr[0], 1, 2.
Також ми можемо вказати у лівій частилі літерал масиву, це буде означати зразу що у нас буде виконуватись диструктизвція і по черзі буде діставати кожен із наших елементів масиву.
Тут є найважливішим те, що коли у нас відбувається деструктизація масива - назва нам не важлива, ми можемо називати її довільно, нам найважливіше - це порядок.
Якщо ми першим елементом (one) ми вказуємо одиничку, то ми ніяк не можемо зразу отримати з нього 2 як перший елемент. Тобто ми мусимо слідкувати за послідовністю.
А що буде якщо ми деструктизуємо трошки більше ніж у нас є? - буде undefined, тобто тут буде та сама поведінка як і звернення по індексу до елемента якого неіснує.

Також є такий лайфхак, уявімо собі що змінна one нам наіколи не буде потрібна, для того щоб не створювати додаткову змінну, ми пишемо просто _, ось приклад:

const arr = [1, 2, 3]; 
const [_, two, three] = arr;
console.log(two, three)

Або ще можна так:

const arr = [1, 2, 3]; 
const [ , two, three] = arr;
console.log(two, three)

Чи так:

const arr = [1, 2, 3]; 
const [ , , three] = arr;
console.log(two, three)


Але деструнктизацію вам не варто сприймати як щось обов'якове, а просто як лише спосіб скоротити код і все.
І не забувайте дотримуватись послідовності, перший, значить перший, другий - другий, третій - третій і тд.

А і ще одне забув дописати:

const [ _, _, three] = arr; - буде помилка, тому що нам скаже що така риска уже була задіяна, тобто воно працює лише 1 раз, за то можна зробити так:
const [ _, , three] = arr; - і все буде окей



ДЕСТРУКТИЗАЦІЯ ОБ'ЄКТА - ДОСИТЬ ВАЖЛИВА!

const user = {
    name: 'Anyta',
    age: 15,
    skills: {
        mind: 'Smart',
        status: 'Filling in love',
        advantage: 'Beauty',
        haveABoy: true,
        HighSchool: false,
    }
};

Є інший метод який допомагає нам уникнути тих звернень (за допомогою крапки)
Ось як ми знаємо як робити:

const age = user.age;

І якби нам довелося б по пару разів звертатися до цього користувача, то ми б писали так:

const name = user.name;
const age = user.age;
const skills = user.skills;
const haveABoy = user.skills.haveABoy

Але є ж просте правило: "Якщо звертаєшся один раз і більше - винеси це у додаткову змінну", тому що багато звернень цих через крапочку вони дійсно тільки засмічують код.
Тому за рахунок деструктизації об'єкта, ми можемо знову ж цей код зменшити:

const {age, name} = user;
console.log(age, name)

Що ж щойно відбулося? - Якщо ми використовуємо деструктизацію об'єкту, тут уже наша почерговість - не поступова (тобто ми можемо писати що ми хочемо і викликати у хаосному порядку),
і маємо писати ТОЧНУ назву яку ми деструктизуємо, тобто просто написати awdawd і думати що щось має вивестись - не вийде.

Іноді є такі випадки що у нас уже данна змінна може існувати, ось візьмемо приклад:





const user = {
    name: 'Anyta',
    age: 15,
    skills: {
        mind: 'Smart',
        status: 'Filling in love',
        advantage: 'Beauty',
        haveABoy: true,
        HighSchool: false,
    }
};


const name = 'value',
const {age, name} = user;
console.log(age, name)

І у такому випадку ми маємо проблему, тому що нам каже що данна перемінна name уже існує.
Тоді б було більш логічно змінити назву одну з перемінних а уявіть собі що цей ключ прийшов з об'єкту, а не наш самостворений ключ,
тому ми скористаємось іншим методом, ми можемо змінити назву того ключа який ми створюємо:

const name = 'value',
const {age, name : userName} = user;
console.log(age, name)

А тепер призверненні до змінної name ми отримали value, а при звернені до userName ми отримали 'Anyta':

const user = {
    name: 'Anyta',
    age: 15,
};

const name = 'value';
const age = 17;

const {age : userAge, name : userName} = user;
console.log(age, name, userName) // 17 'value' 'Anyta'

Даних змін назв може бути безліч, уявімо мобі такий випадок:

const user = {
    name: 'Anyta',
    age: 15,
};

const name = 'value';
const userName = 'valueTwo';
const age = 17;

const {age : userAge, name : userName} = user;
console.log(age, name, userName) // Error, тобто нам потрібно буде придумати якесь інше ім'я:







const user = {
    name: 'Anyta',
    age: 15,
};

const name = 'value';
const userName = 'valueTwo';
const age = 17;

const {age : userAge, name : nameUser} = user;
console.log(age, name, userName, nameUser) // 17 'value' 'valueTwo' 'Anyta'



І так само ми можемо змінити будь який інший ключ. Коли ми створили нову ГЛОБАЛЬНУ назву ключа, то
а змінни age у нас уже такої як немає (тобто вона можна так сказати у якісь мірі - просто існує)

Зліва від двокрапки ми притримуємось лише цієї назви яка знаходиться у нашому об'єкті,
Зправа від двокрапок ми кажемо як ми будемо в майбутньому звертатися, тобто якщо ми вказали:
userAge, тобто все тепер ми ЗОБОВ'ЯЗАНІ звертатися до данної змінної userAge, тому що фактично age - Не існує.




Уявімо собі такий приклад що нам з об'єкту юзера потрібно дістати ключ name і нам потрібно дістати значення JS:

const user = {
    name: 'Anyta',
    age: 15,
    skills: {
        js: true,
        web: false,
        python: true,
    },
};

const {name, age, } = user


Ми б моглиб написати skills і через крапку іти до нашого js, але кращий варіант:


const user = {
    name: 'Anyta',
    age: 15,
    skills: {
        js: true,
        web: false,
        python: true,
    },
};

const {name, age, skills : { js }} = user

Тобто так ми створюємо шлях до всіх ключів які є у skills, і також ми знову можемо змінювати назву.
І так ми можемо діставати всі значення. Давайте трошки ускладнимо ситуацію:


const user = {
    name: 'Anyta',
    age: 15,
    skills: {
        js: true,
        web: false,
        python: true,
        cars : {
            audi: 'A6',
            bmv: 'x5',
        },
    },
};

І нам цікаво дістати audi, тому ми робимо:
    1. деструктизацію нашого user, 
    2. достаємось до skills,
    3. Отримуємо доступ до cars
    4. Знову робимо деструктизацію з cars
    5. Звертаємось по назві яка вказана  у ключі
Ось як це все виглядає:

const {name, skills : { cars : { audi } }} = user
console.log(audi)

І так можна повторювати до безкінечності.
Але пам'ятайте що така нотація досить погано читається, 3 вкладеність краще щоб була остання. Щоб не було важко читати що там відбувається


А уявімо собі ситуацію що нам потрібно деструктизувати у skills - css, і в cars - audi - що робити? Це ж невкладені елементи. Нас нічого не мішає, головне щоб ми знаходились в середині skills або ж у cars, ось приклад:



const user = {
    name: 'Anyta',
    age: 15,
    skills: {
        js: true,
        web: false,
        css: true,
        cars : {
            audi: 'A6',
            bmv: 'x5',
        },
    },
};



const {name, skills: { js, web, css : sass, cars: { audi }}} = user
console.log(js, web, sass, audi) // true false true 'A6'

Тобто ми можемо робити усе що хочемо. І крутити тими данними як бажаємо.

А якщо у нас у властивості - масив об'єктів, як його деструктизувати?
Давайте спробуємо:



const user = {
    name: 'Anyta',
    age: 15,
    skills: {
        js: true,
        web: false,
        css: true,
        cars : {
            audi: 'A6',
            bmv: 'x5',
        },
    },
    langs: [{ html : true}, {css: false}]
};



const { langs : [html, css] } = user
console.log(html, css) // html

const { langs : [html : {html}] } = user
console.log(html) // error


Але це лише як чисто ТЕОРИТИЧНЕ питання, але в реальному житті скоріш за все ви з таким не зіштовхнетесь.

const { langs : [skillHtml, css] } = user
const { html } = skillHtml
console.log(html, css) // html





А тепер давайте деструктизувати значення з нашого масиву але ми його перебираємо:

const user = {
    name: 'Anyta',
    age: 15,
    skills: {
        js: true,
        web: false,
        css: true,
        cars : {
            audi: 'A6',
            bmv: 'x5',
        },
    },
    langs: [{ html : true}, {css: false}]
};

for(const lang of user.langs) {
    console.log(lang) // html, css
}

Що в даному випадку ми можемо зробити? Ми б могли зробити деструктизацію, але при деструктизації об'єкта у нас є 
одна така велика необхідність - ми маємо бути чітко привязані до назв, тобто:

for(const {html} of user.langs) {
    console.log(html)
}

Але якщо різні ключі, то краще такого не робити, а тепер давайте створимо масив об'єктів і назвемо його users:

const users = [
    {
        name: 'User1',
        langs: 'css',
        car: {
            audi: 'A8',
            bmv: 'X5',
        },
    }, 
    {
        name: 'User2',
        langs: 'html',
        car: {
            audi: 'x5',
            bmv: 'X6',
        },
    },
    {
        name: 'User3',
        langs: 'js',
        car: {
            audi: '2019',
        },
    },
]

Як ми бачимо що у нашому випадку ми маємо одинакові ключі, і перебираючи такий масив ми могли б дійсно робити деструктизацію, дістаючи це значення яке нам потрібне, для прикладу name:

for(const {name} of users) {
    console.log(name) // User1 User2 User3
}

І те саме стосується langs:

for(const {name, langs} of users) {
    console.log(name, langs)
}

Також ми можемо виконувати глибоку деструктизацію, для прикладу ми хочемо взяти ім'я кожного користувача і вивести яка у нього машина:

for(const {name, car : {audi}} of users) {
    console.log(name, audi)
}


Ось і все. І все працює як по старому: 

for(const {name, car : {audi : car}} of users) {
    console.log(name, car)
}

І тд.
Ми також можемо створювати default значення:


for(const {name, car : {audi, bmv}} of users) {
    console.log(name, audi, bmv)
}

Якщо у користувача немає такого ключа, тоді ми можемо задати дефолтне значення:

for(const {name, car : {audi, bmv = 'Emm I don\'t know'}} of users) {
    console.log(name, audi, bmv)
}

І у такому випадку що якщо у даному ключі справді щось буде, то його візьмуть, якщо ні - то буде до дефолту те що ви поставите.
І знову ж це працюватиме для будь якого елементу.







Давайте розглянемо метод деструктизації у функції:

function foo(obj) {
    console.log(obj)
}

foo({ name: 'User', langs: 'html', car: { bmv: 'X5', audi: 'A6' }})



Уявімо собі випадок що нас цікавить лише які автомобілі має користувач, тому:



Давайте розглянемо метод деструктизації у функції:

function foo({name, car: {bmw}}) {
    console.log(name, bmw)
}

foo({ name: 'User', langs: 'html', car: { bmw: 'X5', audi: 'A6' }})

І знову ж ми можемо робити дефолтне значення якщо у нас немає такого ключа:



function foo({name, car: {bmw = 'None' }}) {
    console.log(name, bmw)
}

foo({ name: 'User', langs: 'html', car: { bmw: 'X5', audi: 'A6' }})


А уявімо що у нас взагалі не буде ключа car - тоді що робити? Та все дуже просто ставимо default:

function foo({name, car: {bmw = 'Hmm, I don\'t know'} = {}}) {
    console.log(name, bmw)
}

foo({ name: 'User', langs: 'html', car: { bmw: 'X5', audi: 'A6' }})
foo({ name: 'User2', langs: 'css'})
foo({ name: 'User3', langs: 'js', car: { audi: 'A6' }})

Тобто ми кажемо що можливо car не прийде, тоді по замовчуванню постав пустий об'єкт, тобто {}.

І останній приклад з default значення у нас нічого не прийшло, і все як завжди дуже просто:

function foo({name, car: {bmw = 'Hmm, I don\'t know'} = {}} = {}) {
    console.log(name, bmw)
}

foo({ name: 'User', langs: 'html', car: { bmw: 'X5', audi: 'A6' }})
foo({ name: 'User2', langs: 'css'})
foo({ name: 'User3', langs: 'js', car: { audi: 'A6' }})
foo()


І так можемо добавляти дефолтне значення до всього чого хочемо:

function foo({name = 'No name', car: {bmw = 'Hmm, I don\'t know'} = {}} = {}) {
    console.log(name, bmw)
}

foo({ name: 'User', langs: 'html', car: { bmw: 'X5', audi: 'A6' }})
foo({ name: 'User2', langs: 'css'})
foo({ name: 'User3', langs: 'js', car: { audi: 'A6' }})
foo()


І так далі і так далі і так далі...











І остання наша тема це Spread і Rest:
він допомагає нам зручно опрацювати якісь значення особливо якщо ми працюємо з масивами.
Насправді Spet і Rest використовуються чатіше в масивах, і давайте приступимо до прикладів і пояснення:

const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];

Як ми б могли знайти найменше число? Ми согли б використати min

const min = Math.min(arr)
console.log(min) // None

Але є мінус він сприймає лише список, а не масив, тому якщо ми в нього покладемо масив, то він покаже None
Тому для цього ми маємо всі ці елементи які входять в наш масив - розпалити, за допомогою трьох крапок, тобто:

const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];
// spread - поширення/розноситись, тобто тепер ми маємо такий вигляд як у списку: 12, 22, 3, 14, 45, 76, 47, 98, 99, тобто вона прибрала літерал
const min = Math.min(...arr)
console.log(min) // 3

Таком ми можемо створити за його допомогою (spread) копію масиву

const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];
const arr1 = arr
console.log(arr1 === arr) // true

І в такому випадку нам варто створити копію, і це ми можемо зробити за допомогою spread

const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];
const arr1 = [...arr];
arr1.splice(0, 1);
console.log(arr === arr1); // false

Є ще один похожий метод - rest (але він збирає, а не розпилює)

const arr = [12, 22, 3, 14, 45, 76, 47, 98, 99];
const [first, ...props] = arr;
console.log(props); // false

for(let i = 0; i < props.length; i += 1) {
    props[i] *= first
}

console.log(props)

*/