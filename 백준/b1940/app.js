const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m, input] = fs.readFileSync(filePath).toString().trim().split("\n");

let lt = 0;
let rt = n - 1;

let arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let result = 0;

while (lt < rt) {
  if (arr[lt] + arr[rt] == m) {
    result++;
    lt++;
    rt--;
  } else if (arr[lt] + arr[rt] < m) {
    lt++;
  } else if (arr[lt] + arr[rt] > m) {
    rt--;
  }
}

console.log(result);
