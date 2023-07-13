function slideshow (slides) {
  console.log(slides)

  if (!Array.isArray(slides)) {
    // throw new Error('Slide must be an array')
    const err = Error('Slide must be an array')
    console.log(err)
    console.log(typeof err)
    console.log(err.message)
    console.log(err.name)

    console.log(a)

    throw err
  }

  console.log('Function continue')
}

// console.log('1')

// console.log(a)

// console.log('2')

// function func (a, b, c, ...args) {
//   console.log(a, b, c)
//   console.log(args)
// }

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// func(...arr1, ...arr2)

// let a = 1,
//   b = 2

// ;[b, a] = [a, b]

// console.log(a, b)
// const arr = [1, 2]

// const [aaa, b, c = 'ali', ...rest] = arr

// console.log(aaa, b, c, rest)

// const person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   age: 33,
//   family: { father: 'Mohammad', mother: 'Hajar' }
// }

// const {
//   firstName: myFirstName,
//   lastName,
//   gender: myGender = 'male',
//   family: { father: myFatherName },
//   ...rest
// } = person

// // const firstName = person.firstName
// // const lastName = person.lastName
// // const gender = person.gender ?? 'male'

// console.log(myFirstName, lastName, myGender, myFatherName)
// console.log(rest)

// const arr = [...[5, 6, 'af']]

// console.log(typeof ...[5, 6, 'af']) // error

// const sort = (a, b, ...args) => {
//   console.log(a, b, args)
// }

// sort(2, 7, 3, 9)

// const arr = ['ali', 'eli', 'qoli']

// const obj = { ...arr }

// console.log(obj)

// const arr2 = [...obj]

// console.log(arr2)

// const numbers = [4, 5, 12, 9, 7]

// const obj = { name: 'ali' }

// const str = 'salam'

// console.log(Math.max(...numbers))

// const obj = { name: 'Ali' }

// const obj2 = { family: 'Mosavi', name: 'Hasan' }

// const newObj = { ...obj2, ...obj, age: 33, name: 'Qoli', a: { b: 20 } }

// console.log(newObj)

// const obj4 = { ...newObj }

// console.log(obj4)

// obj4.a.b = 50

// console.log(obj4 === newObj)

// const arr = [3, 4, 5]

// const newArr = [1, 2, 3, ...arr, 6, 7, 8]

// console.log(newArr)

// function Func () {
//   console.log(new.target)
// }

// new Func()

// function func () {
//   console.log('===>', this)
//   return {
//     name: 'Hasan',
//     normalFunc: function () {
//       console.log(this)
//     },
//     arrowFunc: () => {
//       console.log(this)
//     }
//   }
// }

// const ali = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// const obj = func.call(ali)

// obj.normalFunc()
// obj.arrowFunc()

// const newObj = {
//   name: 'Pouyan',
//   norm: obj.normalFunc,
//   arr: obj.arrowFunc
// }

// console.log(newObj.norm === obj.normalFunc)

// console.log('=============')
// // newObj.norm()
// obj.normalFunc()

// newObj.norm()
// newObj.arr()

// obj.normalFunc()

// const func = (a, a) => { // Error
//   console.log(a)
// }

// func(10, 20)

// const func = () => {
// console.log(arguments)
// }

// func(1, 2)

// const arr = [2, 3, 4, 5, 6]

// const newArr = arr.map(el => el ** 2)

// console.log(newArr)

// const pow2 = a => a ** 2
// // const pow = (a, b) => a ** b

// console.log(pow2(2))

// const sum = (a, b) => {
//   return a + b
// }

// console.log(sum(2, 3))

// console.log(
//   `Hi ' " ${(function () {
//     return 'salam'
//   })()}`
// )

// const name = 'Ali',
//   family = 'Mousavi'

// console.log('My name is ' + name + ' \n' + family)

// console.log(`My name is ${name}
// ${family}`)

// const arr = ['ali', 'eli']

// arr[1] = 'qoli'

// console.log(arr)

// const obj = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// obj.name = 'Hasan'

// obj = {
//   name: 'Hasan',
//   family: 'Mousavi'
// }

// console.log(obj)

// const a = 10

// a = 20 // Error

// console.log(a)

// function func () {
//   var a = 10
//   console.log(a)
// }

// func()
// func()

// function func () {
//   // #FD12DC
//   // let i
//   for (const i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000)
//   }
// }
// function func () {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(
//       function (j) {
//         console.log(j)
//       },
//       1000,
//       i
//     )
//   }
// }

// func()

// function func () {
//   let a = 10

//   {
//     var a = 20
//     console.log(a)
//   }

//   console.log(a)
// }

// func()

// let family = 'mousavi'

// function func () {
//   console.log(a)

//   let a = 20

//   console.log(a)

//   if (true) {
//     let b = 10

//     console.log(b)
//   }

//   let c = {
//     name: 'Ali'
//   }

//   // console.log(b)
// }

// func()

// // console.log(a)
