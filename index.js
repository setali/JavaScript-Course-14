// Shallow cloning
// Deep cloning

// var person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 33,
//   gender: true,
//   friends: undefined,
//   getFullName: function () {
//     return this.name + ' ' + this.family
//   },
//   birthDay: new Date()
// }

// console.log(person)
// console.log(typeof person)
// console.log(person.getFullName())
// console.log(person.birthDay)

// var jsonPerson = JSON.stringify(person)

// console.log(jsonPerson)
// console.log(typeof jsonPerson)

// var newPerson = JSON.parse(jsonPerson)

// console.log(newPerson)

// console.log(newPerson === person)

// var obj1 = {
//   a: 10,
//   b: 60
// }

// // var obj2 = obj1

// // AB21FD
// var obj3 = {
//   b: 50,
//   // FCA124
//   c: {
//     d: 20
//   }
// }

// var obj2 = {}
// var obj4 = Object.assign(obj2, obj3, obj1)

// var obj2 = Object.assign({}, obj3, obj1)

// var obj2 = JSON.parse(JSON.stringify(obj3))

// console.log(obj2 === obj4)

// obj2.a = 20
// obj2.c.d = 90

// console.log(obj2 === obj3) // false
// console.log(obj2.c === obj3.c) // true

// console.log(obj3)
// console.log(obj2)

// var numbers = [4, 2, 3, 7, 11, 2, 6]

// var max = Math.max.apply(null, numbers)
// // var max = Math.max(4, 2, 3, 7, 11, 2, 6)

// console.log(max)

// var firstName = 'Sasan',
//   lastName = 'Sharifian'

// function welcome (greeting1, greeting2) {
//   console.log(this)
//   console.log(greeting1, greeting2, this.firstName, this.lastName)
// }

// var setareh = {
//   firstName: 'Setareh',
//   lastName: 'Sharifi'
// }

// welcome('Hi')

// welcome.call(setareh, 'Hello', 'Bye')
// welcome.apply(setareh, ['Hello', 'Bye'])
// var newWelcome = welcome.bind(setareh)

// console.log(newWelcome)

// newWelcome('salam', 'khodahafez')
// welcome()

// var newWelcome2 = newWelcome.bind({ firstName: 'Ali', lastName: 'Mousavi' }) // Not effect

// newWelcome2()

// var firstName = 'Ali'

// function printName () {
//   console.log(this.firstName)
//   console.log(this)
// }

// var mahsa = {
//   firstName: 'Mahsa',
//   printName
// }

// var mina = {
//   firstName: 'Mina',
//   printName
// }

// mina.printName()

// mahsa.printName()

// printName()

// var num1 = new Number(12)

// console.log(typeof num1)
// console.log(num1) // object
// console.log(+num1) // 12
// console.log(num1 == 12) // true
// console.log(num1 === 12) // false

// var firstName = 'Ali'

// function Person (name) {
//   // this.firstName = name

//   console.log(this)
// }

// new Person('Kasra')

// Person('Poyan')

// var mahsa = {
//   name: 'Mahsa',
//   family: 'Ekhtiari',
//   age: 27,
//   getFullName: function () {
//     console.log(mahsa === this)
//     return this.name + ' ' + this.family
//   }
// }

// console.log(mahsa.getFullName())

// function Person (name, family, age) {
//   this.name = name
//   this.family = family
//   this.age = age

//   this.getFullName = function () {
//     return this.name + ' ' + this.family
//   }
// }

// var mina = new Person('Mina', 'Mirzahoseinian', 30)

// console.log(mina.getFullName())

// var haniye = new Person('Haniye', 'RostamTash', 39)

// console.log(haniye.getFullName())

// console.log(haniye)

// console.log(haniye instanceof Person)
// console.log({} instanceof Person)

// snack_case_naming
// camelCaseNaming
// PascalCaseNaming
// UPPER_CASE_NAMING
// kebab-case-naming
