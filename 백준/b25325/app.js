const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

input.shift()
const map = new Map()

for (let x of input[0].split(' ')) {
    map[x] = 0
}

for (let i = 1; i < input.length; i++) {
    for (let x of input[i].split(' ')) {
        map[x]++
    }
}

const arr = []

for (let x of input[0].split(' ')) {
    arr.push([x, map[x]]);
}

arr.sort((a, b) => b[1] - a[1])

for (let x of arr) {
    console.log(x.join(' '));
}

