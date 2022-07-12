const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

input.shift()

const arr = []

for (let x of input) {
    const spl = x.split(',').map((a) => Number(a))
    arr.push(spl[0] + spl[1])
}

console.log(arr.join('\n'));