import _ from 'lodash'
import ali, { sum as mySum, sub } from './math'
import * as math from './math'

console.log(math)

console.log(_.random(1, 20))

// const { sum: mySum, sub } = require('./math')

console.log(mySum(2, 5))
console.log(sub(2, 5))
console.log(ali(2, 5))

// console.log('sa"lam')

// const path = require('path')
// const fs = require('fs')

// const p = path.resolve(__dirname, 'ali', 'hasan')

// if (!fs.existsSync(p)) {
//   fs.mkdirSync(p)
// }

// const filename = path.resolve(p, 'ali.text')

// fs.writeFileSync(filename, 'salam')
