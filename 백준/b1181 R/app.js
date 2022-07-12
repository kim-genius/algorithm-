const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

input.shift()
input.sort()
input.sort((a, b) => a.length - b.length)

const s = new Set(input)

console.log(Array.from(s).join('\n'));

