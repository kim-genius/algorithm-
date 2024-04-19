const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let ex = Math.round(n * 0.15);
let arr = input.sort((a, b) => a - b).slice(ex, n - ex);
let sum = arr.reduce((pre, cur) => pre + cur, 0);

let result = 0;
if (n != 0) {
  result = Math.round(sum / arr.length);
}
console.log(result);
