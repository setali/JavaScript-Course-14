const _ = require('lodash')

console.log(_.random(1, 20))

const { sum, sub } = require('./math')

console.log(sum(2, 5))
console.log(sub(2, 5))

console.log('sa"lam')

// const path = require('path')
// const fs = require('fs')

// const p = path.resolve(__dirname, 'ali', 'hasan')

// if (!fs.existsSync(p)) {
//   fs.mkdirSync(p)
// }

// const filename = path.resolve(p, 'ali.text')

// fs.writeFileSync(filename, 'salam')
