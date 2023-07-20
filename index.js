// class Point {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//   }
//   // static distance (a, b) {
//   //   const dx = a.x - b.x
//   //   const dy = a.y - b.y
//   //   return Math.hypot(dx, dy)
//   // }
// }

// Point.distance = function (a, b) {
//   const dx = a.x - b.x
//   const dy = a.y - b.y

//   console.log(this)
//   return Math.hypot(dx, dy)
// }

// const p1 = new Point(5, 5)
// const p2 = new Point(10, 10)
// p1.distance //undefined
// p2.distance //undefined
// console.log(p1.distance)
// console.log(Point.distance(p1, p2))

// class Animal {
//   static ZOO_NAME = 'Eram'

//   constructor (type) {
//     this.type = type
//   }

//   eat () {
//     console.log('HUM HUM')
//   }
// }

// class Cat extends Animal {
//   constructor (breed) {
//     super('CAT')

//     this.breed = breed
//   }

//   speak () {
//     console.log('MIU MIU')
//   }

//   eat () {
//     super.eat()
//     console.log('HIM HIM')
//   }
// }

// class DSH extends Cat {
//   constructor (name, color) {
//     super('DSH')
//     this.name = name
//     this.color = color
//   }

//   attack () {
//     console.log('ATTACK')
//   }
// }

// const pishoo = new DSH('Pishoo', 'gray')

// console.log(pishoo instanceof DSH)
// console.log(pishoo instanceof Cat)
// console.log(pishoo instanceof Animal)
// console.log(pishoo instanceof Object)

// console.log(pishoo)

// pishoo.eat()

// pishoo.speak()

// pishoo.attack()

// console.log(DSH.ZOO_NAME)

// console.log(pishoo.toString())

// const cat = new Cat('DSH')

// console.log(cat)

// cat.speak()
// cat.eat()

// const animal = new Animal('CAT')

// console.log(animal)
// animal.eat()

// class Person {
//   country = 'Iran'

//   constructor (name, family) {
//     this.name = name
//     this.family = family
//   }

//   getFullName () {
//     return this.name + ' ' + this.family
//   }

//   get fullName () {
//     return this.name + ' ' + this.family
//   }
// }

// const ali = new Person('Ali', 'Mousavi')

// console.log(ali)

// console.log(ali.getFullName())
// console.log(ali.fullName)

// async function request (url) {
//   const response = await fetch(url)
//   const data = await response.json()
//   return data
// }

// request('https://jsonplacsseholder.ir/users/1')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// const delay = time => new Promise(resolve => setTimeout(() => resolve(), time))

// async function func () {
//   for (let i = 0; i < 5; i++) {
//     await delay(1000)
//     console.log(i)

//     // setTimeout(() => console.log(i), 1000)
//   }
// }

// console.log('a')
// func()
// console.log('b')

// delay(1000, 'Ali').then(value => console.log(value))

// async function func (a, b) {
//   await delay(1000)
//   return a ** b
// }

// func(2, 3).then(value => console.log(value))

// async function prom (value) {
//   // throw 'ali'
//   return value ** 2
// }

// prom(2)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// function request (url, method = 'GET') {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()

//     xhr.open(method, url)

//     xhr.send()

//     xhr.onload = function () {
//       return resolve({
//         status: this.status,
//         response: this.responseText,
//         json: function () {
//           return new Promise((resolve, reject) => {
//             try {
//               resolve(JSON.parse(this.response))
//             } catch (err) {
//               reject({
//                 status: this.status,
//                 response: err
//               })
//             }
//           })
//         }
//       })
//     }

//     xhr.onerror = function () {
//       return reject({
//         status: this.status,
//         response: 'Request Error'
//       })
//     }
//   })
// }

// const url = 'https://jsonplaceholder.ir/users/1'
// // const url = 'https://jsonplaceholder.ir'

// const d = fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))

// console.log(d)

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally(() => console.log('request finished'))

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// request(url, 'GET', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// function prom (a, b) {
//   return new Promise((resolve, reject) => {
//     if (Number.isNaN(a) || Number.isNaN(b)) {
//       return reject(`You Mustn't use NaN value`)
//       console.log('a')
//     }

//     const result = a ** b

//     console.log('===>', result)
//     return resolve(result)
//     console.log('b')
//   })
// }

// console.log(1)

// prom(4, NaN)
//   .then(value => console.log(value))
//   .catch(err => console.log(err))
//   .finally(() => console.log('finally'))

// console.log(2)

// console.log(1)

// console.log(2 + 3)

// setTimeout(() => {
//   console.log(10)

//   console.log(4 ** 4)
// }, 0)

// const prom = new Promise((resolve, reject) => {
//   console.log(4)
//   resolve(2 ** 3)
// })

// console.log(2)

// console.log(prom)

// prom.then(value => console.log(value))

// console.log(3)

// function recursiveDeepObjectCloning (obj) {
//   for (var item in obj) {
//     console.log(item)
//     if (typeof obj[item] === 'object' && obj[item] !== null) {
//       obj[item] = Object.assign({}, obj[item])
//       recursiveDeepObjectCloning(obj[item])
//     }
//   }
// }

// const obj1 = { a: 10, b: { c: 20 }, d: { f: 50 } }

// const obj2 = Object.assign({}, obj1)

// recursiveDeepObjectCloning(obj2)

// function createIncrement () {
//   // #12ACDB
//   let value = 0

//   return function counter () {
//     value = value + 1
//     console.log(value)

//     const message = `Current value is ${value}` //  Current value is 1

//     function logger () {
//       console.log(message)
//     }

//     function getValue () {
//       return value
//     }

//     return {
//       logger,
//       getValue
//     }
//   }
// }

// const counter = createIncrement()
// // value = 0
// // func increment

// const { logger, getValue } = counter()
// // value = 1
// // message1 = 'Current value is 1'

// const { logger: logger2 } = counter()
// // value = 2
// // message2 = 'Current value is 2'
// // func logger2
// // func getValue2

// counter()
// // value = 3
// // message3 = 'Current value is 3'
// // func logger3
// // func getValue3

// logger()
// console.log(getValue())

// logger2()
