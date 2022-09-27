const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, l] = t.split(" ");
input = input
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

for (let i = 0; i < n; i++) {
  if (l >= input[[i]]) {
    l++;
  } else {
    break;
  }
}

console.log(l);
