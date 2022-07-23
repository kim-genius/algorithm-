const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let n = 1;
let r = 1;
let n_r = 1;

for (let i = 1; i <= input[0]; i++) {
  n *= i;
}

for (let i = 1; i <= input[1]; i++) {
  r *= i;
}

for (let i = 1; i <= input[0] - input[1]; i++) {
  n_r *= i;
}

console.log(n / (r * n_r));
