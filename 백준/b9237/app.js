const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input
  .split(" ")
  .sort((a, b) => b - a)
  .map(Number);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i] + i + 1;
}

console.log(Math.max(...input) + 1);
