const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [L, S, n] = fs.readFileSync(filePath).toString().trim().split("\n");

let first = 0;
let last = 0;

S = S.split(" ")
  .map(Number)
  .sort((a, b) => a - b);

L = +L;
n = +n;

for (let i = 0; i < L; i++) {
  if (S[i] <= n && n <= S[i + 1]) {
    first = S[i];
    last = S[i + 1];
    break;
  }
}

let arr = [];

for (let i = first + 1; i < last; i++) {
  for (let j = i + 1; j < last; j++) {
    if (i <= n && j >= n) {
      arr.push([i, j]);
    }
  }
}

if (n < S[0]) {
  for (let i = 1; i < S[0]; i++) {
    for (let j = i + 1; j < S[0]; j++) {
      if (i <= n && j >= n) {
        arr.push([i, j]);
      }
    }
  }
}

console.log(arr.length);
