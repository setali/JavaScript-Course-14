// Pass by reference
// #ADF214
var a = { value: 10 }

function func (b) {
  b.value++
  console.log(b)
}

func(a)

console.log(a)
// // Pass by value
// var a = 20

// function func (b) {
//   b++
//   console.log(b)
// }

// func(a)

// console.log(a)

// function useState (defaultValue) {
//   var value = defaultValue

//   function setValue (newValue) {
//     value = newValue
//     console.log(value)
//   }

//   return [value, setValue]
// }

// var arr = useState(10)

// var value = arr[0]
// console.log(value)

// var setValue = arr[1]

// setValue(20)

// setValue(30)

// var counter1 = (function () {
//   var counter = 1

//   function increase () {
//     counter++
//     console.log(counter)
//   }

//   function decrease () {
//     counter--
//     console.log(counter)
//   }

//   return {
//     increase,
//     decrease
//   }
// })()

// console.log(counter1)

// var counter1 = Counter()

// console.log(counter1)

// function func (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }

// var sum5 = func(5)

// console.log(sum5)

// var sum20 = sum5(15)

// console.log(sum20)

// console.log(sum20(5))
// console.log(sum20(15))
// console.log(sum20(1))

// console.log(sum5(6)(4))
// console.log(sum5(16)(4))

// console.log(func(2)(6)(10))

// console.log(func(5)(7)(9))

// function func () {
//   // #AD21FA
//   var i
//   for (i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000)
//   }
// }

// func()

// var i = 1

// var intervalId = setInterval(function () {
//   console.log(i++)
// }, 1000)

// console.log('id', intervalId)

// setTimeout(function () {
//   clearInterval(intervalId)
// }, 10000)

// console.log(1)

// setTimeout(function () {
//   console.log('salam')
// }, 1000)

// console.log(2)

// setTimeout(function () {
//   console.log('ali')
// }, 2000)

// var a = 10

// var a = 20

// console.log(a)

// func()

// function func () {
//   console.log('salam')
// }

// var a

// console.log(a)

// a = 20

// console.log((a = 20))

// var a = 10
// window.a3 = 40

// function func () {
//   a1 = 20
//   window.a2 = 30
// }

// func()

// console.log(a1)
// console.log(a2)

// var a = 20

// window.alert('salam')

// console.log(a)
// console.log(window.a)
// // #21DFA1
// var a = 10

// function func () {
//   var a = 20

//   console.log(a)

//   function func2 () {
//     console.log(a)
//     var b = 12
//   }

//   func2()

//   console.log(b)
// }

// func()

// console.log(a)

// function factorial (n) {
//   return n === 1 ? 1 : n * factorial(n - 1)
// }

// console.log(factorial(5))

// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

// function factorial (n) {
//   var result = n

//   for (var i = n - 1; i > 1; i--) {
//     result *= i
//   }

//   return result
// }

// console.log(factorial(5))

// Stack => Last In First Out => LIFO
// Queue => First In First Out => FIFO

// function func () {
//   func()
// }

// func()

// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

// 5! = 5 * 4 * 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 3! = 3 * 2 * 1
// 2! = 2 * 1
// 1! = 1

// function sum () {
//   console.log(arguments)

//   var result = 0

//   for (var i = 0; i < arguments.length; i++) {
//     result = result + arguments[i]
//   }

//   return result
// }

// // console.log(sum(5, 7))
// // console.log(sum(5, 7, 41))
// // console.log(sum(5, 7, 41, 4, 5, 8))
// console.log(sum())
