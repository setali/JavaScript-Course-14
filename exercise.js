// function power (a, b) {
//   var result = a

//   for (var i = 1; i < b; i++) {
//     result *= a
//   }

//   return result
// }

function power (a, b) {
  return b === 1 ? a : a * power(a, b - 1)
}

// 2 ** 3 => 2 * 2 ** 2
// 2 ** 2 => 2 * 2 ** 1
// 2 ** 1 => 2 * 2 ** 0
// 2 ** 0 => 1

//  2 ** 3 => 2 * 2 * 2

console.log(power(2, 4))

// function numbers () {
//   var zoj = 0
//   var fard = 0
//   for (var i = 0; i < arguments.length; i++) {
//     arguments[i] % 2 ? fard++ : zoj++
//   }

//   console.log('zoj=', zoj, 'fard=', fard)
// }

// numbers(10, 12, 20, 5, 7, 9)

////////////////// 12

var number = 13

// if (number % 2) {
//   console.log('Odd')
// } else {
//   console.log('Even')
// }

// switch (number % 2) {
//   case 1:
//     console.log('Odd')
//     break

//   case 0:
//     console.log('Even')
//     break
// }

// console.log(number % 2 ? 'Odd' : 'Even')

///////////////// 11

function callBackOperation (cb) {
  // var operator = arguments[0]
  console.log(arguments)

  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  return cb.apply(null, numbers)
}

// console.log(callBackOperation(sum, 12, 2, 3))
// console.log(callBackOperation(subtraction, 12, 2, 3))
// console.log(callBackOperation(multiply, 12, 2, 3))
// console.log(callBackOperation(division, 12, 2, 3))

///////////////// 10

function operation (operator) {
  // var operator = arguments[0]

  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  switch (operator) {
    case 'sum':
      return sum.apply(null, numbers)

    case 'sub':
      return subtraction.apply(null, numbers)

    case 'mul':
      return multiply.apply(null, numbers)

    case 'div':
      return division.apply(null, numbers)

    default:
      console.error('This operator not defined.')
  }
}

// console.log(operation('sum', 12, 2, 3))
// console.log(operation('sub', 12, 2, 3))
// console.log(operation('mul', 12, 2, 3))
// console.log(operation('div', 12, 2, 3))
// console.log(operation('ali', 12, 2, 3))

//////////////// 9

function sum () {
  var result = 0

  //   for (var i = 0; i < arguments.length; i++) {
  //     result += arguments[i]
  //   }

  for (var number of arguments) {
    result += number
  }

  return result
}

function subtraction () {
  var result = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    result -= arguments[i]
  }

  return result
}

function multiply () {
  var result = 1

  for (var number of arguments) {
    result *= number
  }

  return result
}

function division () {
  var result = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    result /= arguments[i]
  }

  return result
}

// console.log(division(12, 2, 3))
// console.log(multiply(12, 2, 3))
// console.log(subtraction(12, 2, 3))
// console.log(sum(2, 1, 6, 3))

/////////////////8

function getFullName (obj) {
  return obj.firstName + ' ' + obj.lastName
}

///////////////// 7

function printFriends (obj) {
  for (var friend of obj.friends) {
    console.log(friend)
  }
}

//  00011010101010101

// 00000000000000000

//////////4

// var alireza = {
//   firstName: 'Alireza',
//   lastName: 'Jamali',
//   birthYear: '1377',
//   bornCity: 'Busher',
//   job: 'JavaScript forntend developer',
//   familyMembers: {
//     parents: {
//       father: {
//         firstName: 'Bahram',
//         lastName: 'Jamali',
//         birthYear: '1341',
//         bornCity: 'Shiraz',
//         job: 'Retired'
//       },
//       mother: {
//         firstName: 'Mahnaz',
//         lastName: 'Ramezan zadeh',
//         birthYear: '1343',
//         bornCity: 'Abadan',
//         job: 'Housekeeper'
//       }
//     },
//     sibilings: {
//       sisters: [
//         {
//           firstName: 'Maryam',
//           lastName: 'Jamali',
//           birthYear: '1370',
//           bornCity: 'Bushehr',
//           job: 'English Teacher'
//         }
//       ],
//       brothers: []
//     }
//   },
//   friends: {
//     regularFriends: ['Hossein', 'Mehdi', 'Ayeh', 'Amin', 'Kazhal'],
//     bestFriends: ['Amir Mohammad', 'Negin', 'Alireza', 'Ali']
//   }
// }

var ali = {
  firstName: 'Ali',
  lastName: 'Mousavi',
  age: 33,
  family: {
    father: 'Mohammad',
    mother: 'Hajar'
  },
  friends: ['Ali', 'Qoli', 'Eli']
}

// printFriends(ali)
// console.log(getFullName(ali))

// console.log(ali)
///// 1

// var name = 'Ali',
//   family = 'Mousavi',
//   city = 'Shiraz',
//   age = 33

// console.log(
//   'My name is ' +
//     name +
//     ' ' +
//     family +
//     "\n\t=> I'm living in " +
//     city +
//     '\n\t=> I have ' +
//     age +
//     ' years old'
// )
