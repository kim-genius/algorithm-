const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

const N = input[0].split(' ')[0]

input.shift()

const a = input.slice(0, N)
const b = input.slice(N)

const arr = []

const map = new Map()

for (let x of a) {
    map[x] = true
}

for (let x of b) {
    if (map[x]) {
        arr.push(x)
    }
}

console.log(arr.length);
console.log(arr.sort().join('\n'));