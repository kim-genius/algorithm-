const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = input.sort((a, b) => a - b);
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += Math.abs(i + 1 - arr[i]);
}

console.log(sum);
