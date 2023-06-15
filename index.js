// var arr = [4, 1, 3, 9, 11, 7, 2, 11]

// arr.sort(function (a, b) {
//   //   console.log(a, b)

//   return b - a
// })

// console.log(arr)

// var arr = [4, 6, 9, 1, 2]

// var result = arr.reduce(function (acc, el) {
//   console.log(acc, el)

//   return acc + el
// })

// console.log(result)

// var result = 0

// arr.forEach(function (el) {
//   result = result + el
// })

// console.log(result)

// var pets = ['cat', 'dog', 'bat']

// console.log(
//   !!pets.find(function (el) {
//     return el === 'at'
//   })
// )

// var arr = [1, 2, 3, 4]

// var newArr = arr.map(function (el) {
//   return el * 2
// })

// console.log(newArr)

// console.log(arr.length === newArr.length)
var students = [
  { name: 'Haniye', age: 39, gender: 'female' },
  { name: 'Kasra', age: 28, gender: 'male' },
  { name: 'Leila', age: 28, gender: 'female' },
  { name: 'Mahgol', age: 33, gender: 'female' },
  { name: 'Mahsa', age: 27, gender: 'female' },
  { name: 'Mina', age: 30, gender: 'female' },
  { name: 'Nasir', age: 28, gender: 'male' },
  { name: 'Nasrin', age: 30, gender: 'female' },
  { name: 'Poyan', age: 33, gender: 'male' },
  { name: 'Alireza', age: 25, gender: 'male' },
  { name: 'Mahsa', age: 4, gender: 'female' }
]

students.sort(function (a, b) {
  return b.age - a.age
  if (a.age < b.age) {
    return -1
  } else {
    return 1
  }
})

console.log(students)

// var result = students.reduce(function (acc, student) {
//   return acc + student.age
// }, 0)

// console.log(result)

// var names = students.map(function (el) {
//   return el.name
// })

// console.log(names)

// students.forEach(function (el) {
//   console.log(el.name)
// })

// for (var student of students) {
//   console.log(student.name)
// }

// for (var i = 0; i < students.length; i++) {
//   console.log(students[i].name)
// }

// var index = students.findIndex(function (el) {
//   return el.name === 'Haniye'
// })

// console.log(index)

// var hasMale = students.some(function (el) {
//   return el.gender === 'male'
// })

// console.log(hasMale)

// var mahsa = students.find(function (el) {
//   return el.name === 'Mahsa'
// })

// console.log(mahsa)

// var youngs = students.filter(function (el) {
//   return el.age < 30
// })

// console.log(youngs)

// function isMale (el) {
//   return el.gender === 'male'
// }

// var males = students.filter(isMale)

// var females = students.filter(function (el) {
//   return el.gender === 'female'
// })

// console.log(males)
// console.log(females)

// var arr = [2, 1, 3, 8, 9, 4, 6]

// var odds = arr.filter(function (el) {
//   return el % 2
// })
// var evens = arr.filter(function (el) {
//   return !(el % 2)
// })

// console.log(odds)
// console.log(evens)

// var arr = [2, 4, 8, 12]

// var allAreEven = arr.every(function (el, i, array) {
//   return !(el % 2)
// })

// console.log(allAreEven)
// var obj = {
//   name: 'Ali',
//   toJSON () {
//     return 'salam'
//   }
// }

// console.log(JSON.stringify(obj))

// var arr = new Array(10).fill(1)

// console.log(arr)

// console.log(Array.from('salam'))

// var arr = Array.from([1, 2, 3], function (el, index) {
//   console.log(el, index)
//   return el * 2
// })
// var arr = Array.from({ length: 3 }, function (el, index) {
//   console.log(el, index)
//   return index + 1
// })

// console.log(arr)

// function* g () {
//   yield 10
//   yield 20
//   yield 30

//   yield 'ali'
// }

// var it = g()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// for (var a of it) {
//   console.log('=>', a)
// }

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// var arr = [1, 2, 3, 4, {}, 5]

// console.log('ali' + arr)

// console.log(arr.length)

// arr.length = 2

// console.log(arr)

// var arr = [10]

// var arr2 = new Array(10)

// console.log(arr)
// console.log(arr2)
// console.log(arr2[2])

// var person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 33
// }

// var entries = Object.entries(person)

// console.log(entries)

// var newObj = Object.fromEntries(entries)

// console.log(newObj)

// console.log(newObj === person)

// var obj = {
//   name: 'Ali'
// }

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

// var obj = {
//   name: 'Ali'
//   //   age: 33
// }

// Object.defineProperty(obj, 'age', {
//   get: function () {
//     return this._age
//   },
//   set: function (value) {
//     this._age = +value
//   }
// })

// obj.age = '39'

// console.log(obj)

// console.log(obj.age)

// var obj = {
//   name: 'Ali'
// }

// obj.family = 'Mousavi'

// // Object.defineProperty(obj, 'age', {
// //   value: 33,
// //   enumerable: true,
// //   configurable: true,
// //   writable: false
// // })

// Object.defineProperty(obj, 'fullName', {
//   get: function () {
//     return this.name + ' ' + this.family
//   },
//   set: function (value) {
//     var arr = value.split(' ')
//     this.name = arr[0]
//     this.family = arr[1]
//   }
// })

// console.log(obj)

// console.log(obj.fullName)

// obj.fullName = 'Hasan Hasani'

// console.log(obj)

// delete obj.family
// delete obj.age

// obj.family = 'Hasani'
// obj.age = 35

// console.log(obj)

// for (var key in obj) {
//   console.log(key, obj[key])
// }

// console.log(JSON.stringify(obj))

// var obj = Object.create(null)

// console.log(obj)

// var obj = Object.create({ name: 'ali', age: 33 })

// // obj.name = 'qoli'

// console.log(obj)
// console.log(obj.name)
