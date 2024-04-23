const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, arr, x] = fs.readFileSync(filePath).toString().trim().split("\n");

n = +n;
arr = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
x = +x;

let lt = 0;
let rt = n - 1;

let answer = 0;
while (lt < rt) {
  if (arr[lt] + arr[rt] == x) {
    answer++;
    lt++;
    rt--;
  } else if (arr[lt] + arr[rt] > x) {
    rt--;
  } else {
    lt++;
  }
}

console.log(answer);
