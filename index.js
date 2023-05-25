// function func () {}

// ;[a, b] = [2, 4]

// ;(function () {})()

// // Mongoose.findAll(function (data) {
// //   return response(data)
// // })

// function sum (a, b) {
//   return a + b
// }

// function sub (a, b) {
//   return a - b
// }

// var noop = function () {}
// const noop = () => {}

// function execute (a, b, cb = noop) {
//   //   console.log(a, b, cb)
//   //   console.log(typeof action)
//   return cb(a, b)
// }

// var result = execute(4, 2)

// console.log(result)

// console.log(
//   execute(8, 6, function (a, b) {
//     return a * b
//   })
// )

// var result = execute(14, 2, function (a, b) {
//   return a / b
// })

// console.log(result)

// console.log(execute(8, 6, sum))
// console.log(execute(8, 6, sub))

// function execute (a, b, action) {
//   if (action === 'sum') {
//     return sum(a, b)
//   } else if (action === 'sub') {
//     return sub(a, b)
//   }
// }

// console.log(execute(8, 6, 'sub'))

// console.log(sum(8, 6))
// console.log(sub(8, 6))

// var sum = function (a, b) {
//   return a + b
// }

// console.log(sum(2, 5))

// function isOdd (num) {
//   return !!(num % 2)
// }

// function isEven (num) {
//   return !isOdd(num)
// }

// console.log(isOdd(11))

// console.log(isEven(13))

// function evenOrOdd (num) {
//   return typeof num === 'number' ? (num % 2 ? 'odd' : 'even') : 'Not a number'
// }

// console.log(evenOrOdd(12))
// console.log(evenOrOdd(187))
// console.log(evenOrOdd('ali'))

// function sayHello () {
//   console.log('Hello')

//   return

//   console.log('salam') // not execute
//   console.log('qolam') // not execute
// }

// var result = sayHello()

// console.log(result)

// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()

// function sum (a = 0, b = 0, c = 0) {
//   //   if (c === undefined) {
//   //     c = 0
//   //   }

//   //   c = c === undefined ? 0 : c

//   //   c = c ?? 0

//   //   console.log(a, b)
//   var result = a + b + c

//   return result
// }

// console.log(sum(2, 5))
// console.log(sum(2, 5, 10))
// console.log(sum(2))
// console.log(sum())

// console.log(sum(2, 7))
// console.log(sum(20, 17))
// console.log(sum(22, 6))
// console.log(sum(22, 6, 5))

// var person = {
//   name: 'hosein',
//   family: 'hosein',
//   age: 30
// }

// console.log('name' in person)

// for (var key in person) {
//   console.log(key, ' => ', person[key])
// }

// for (var char of 'salam') {
//   console.log(char)
// }

// var friends = ['Ali', 'Eli', 'Qoli', 'Fati', 'Mahsa']

// for (var friend of friends) {
//   console.log(friend)
// }

// var friends = [
//   { name: 'ahmad', gender: 'male' },
//   { name: 'hanieh', gender: 'female' },
//   { name: 'kasra', gender: 'male' },
//   { name: 'leila', gender: 'female' }
// ]

// for (var i = 0; i < friends.length; i++) {
//   if (friends[i].gender === 'female') {
//     console.log(friends[i].name)
//   }
// }

// for (var i = 0; i < 10; i++) {
//   if (i % 2) {
//     continue
//   }

//   console.log(i)
// }

// var obj = {
//     name: 'Ali',
//     completeProfile: false
// }

// obj.completeProfile ? redirectToHome() : reDirectToProfile()

// var friends = ['Ali', 'Eli', 'Qoli', 'Fati', 'Mahsa']

// for (var i = 0; i < friends.length; i++) {
//   console.log(friends[i])
// }

// var str = 'salam'

// for (var i = 0; i < str.length; i++) {
//   console.log(str[i])
// }

// var a = 10

// do {
//   console.log(a)
//   a++
// } while (a < 10)

// var a = 10

// while (a < 10) {
//   console.log(a)
//   a++
// }

// var i = 0

// for (;;) {
//   console.log('salam', i)
//   i++
//   if (i >= 10) {
//     break
//   }
// }

// var obj = {
//   name: 'Ali'
//   //   family: 'Mousavi'
//   //   fullName: 'Ali Mousavi'
// }

// console.log(obj.fullName || obj.family || obj.name)

// var value = 10

// value % 2 ? console.log('Odd') : console.log('Even')

// console.log(value % 2 ? 'Odd' : 'Even')

// var value = 'f'

// switch (value) {
//   case 'A':
//   case 'a':
//     console.log('Value is A')
//     break

//   case 'B':
//   case 'b':
//     console.log('Value is B')
//     break

//   case 'C':
//   case 'c':
//     console.log('Value is C')
//     break

//   default:
//     console.log('Value is not A, B, or C')
// }

// if (heavy condition) {
// if (true) console.log('Ali') // not good

// var a = 24

// if (a % 2) {
//   console.log('Odd')
// } else {
//   console.log('Even')
// }

// var a = 10

// if (a > 10) {
//   console.log('A is greater than 10')
// } else if (a < 10) {
//   console.log('A is less than 10')
// } else {
//   console.log('A is equal 10')
// }
