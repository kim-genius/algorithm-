const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

let sum = 0;
let min = Number.MAX_SAFE_INTEGER;

for (let i = input[0]; i <= input[1]; i++) {
  if (isPrime(i)) {
    sum += i;
    min = Math.min(min, i);
  }
}
if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}
