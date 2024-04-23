const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let sum = 0;
let answer = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < k; i++) {
  sum += arr[i];
}

answer = sum;
for (let i = k; i < arr.length; i++) {
  sum += arr[i];
  sum -= arr[i - k];

  answer = Math.max(answer, sum);
}

console.log(answer);
