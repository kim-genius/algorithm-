const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

input = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let max = Math.max(...input);

let lt = 1,
  rt = max;

let answer = 0;
while (lt <= rt) {
  let mid = Math.floor((lt + rt) / 2);
  let sum = 0;
  for (let x of input) {
    if (x > mid) sum += x - mid;
  }
  if (sum >= M) {
    if (mid > answer) answer = mid;
    lt = mid + 1;
  } else {
    rt = mid - 1;
  }
}
console.log(answer);
