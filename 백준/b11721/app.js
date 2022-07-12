const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()

while (input) {
    console.log(input.slice(0, 10));
    input = input.slice(10)
}