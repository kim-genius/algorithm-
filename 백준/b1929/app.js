const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const result = [];
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

for (let i = input[0]; i <= input[1]; i++) {
  if (isPrime(i)) result.push(i);
}

console.log(result.join("\n"));
