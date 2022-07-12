const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

for (let x of input) {
    let answer = 'yes'
    if (x === '0') break
    for (let i = 0; i < Math.floor(x.length / 2); i++) {
        if (x[i] !== x[x.length - 1 - i]) answer = 'no'
    }
    console.log(answer);
}
