const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()

let N = Number(input)
let answer = 0

let i = 1
while (i <= N) {
    let sum = 0
    let arr = String(i).split('')

    sum = i + arr.reduce((a, b) => Number(a) + Number(b), 0)
    if (sum === N) {
        answer = i;
        break
    }
    i++
}

console.log(answer);