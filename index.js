// 2 + 4 // exp
// const a = 10 // statement



// class Book {
//   constructor (name, author) {
//     this.name = name
//     this.author = author
//   }

//   // `instance` is what's being compared
//   static [Symbol.hasInstance] (instance) {
//     // `instance` is a `Book` if
//     // it has a name and author
//     return instance.name && instance.author
//   }
// }

// // these are the fields we need
// const name = 'Harry Potter'
// const author = 'J.K. Rowling'

// console.log(new Book(name, author) instanceof Book) // true
// console.log({ name, author } instanceof Book) // true

// const iterable1 = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 33
// }

// iterable1[Symbol.iterator] = function* () {
//   for (const key in this) {
//     yield this[key]
//   }
// }

// // console.log([...iterable1])

// for (const el of iterable1) {
//   console.log(el)
// }

// class Person {
//   static [Symbol.hasInstance] (instance) {
//     if (Array.isArray(instance)) {
//       return true
//     }
//     if (instance === 50) {
//       return true
//     }
//     if (instance instanceof Person) {
//         return true
//     }
//   }
// }

// const p = new Person()

// console.log(p instanceof Person)
// console.log(50 instanceof Person)

// const obj = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 33,
//   [Symbol.toPrimitive] (hint) {
//     if (hint === 'number') {
//       return this.age
//     }
//     if (hint === 'string') {
//       return `${this.name} ${this.family}`
//     }
//   }
// }

// console.log(+obj)
// console.log(`${obj}`)

// const sym1 = Symbol('A')

// console.log(sym1)

// const sym2 = Symbol('B')

// console.log(sym2)

// console.log(sym1 === sym2)

// const obj = {
//   name: 'Ali',
//   family: 'Mousavi',
//   [sym1]: 23
// }

// console.log(obj)

// console.log(JSON.stringify(obj))

// for (const key in obj) {
//   console.log(key, obj[key])
// }
