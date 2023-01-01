const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let sum = 0;
let i = 0;
let result = 0;

while (i < input.length) {
  sum += input[i];

  if (sum >= 100) break;

  i++;
}

if (Math.abs(100 - sum) > Math.abs(100 - (sum - input[i]))) {
  result = sum - input[i];
} else {
  result = sum;
}

console.log(result);
