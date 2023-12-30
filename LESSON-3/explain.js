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
*/