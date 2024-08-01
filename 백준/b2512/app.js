const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let m = +input[2];

let lt = 1;
let rt = Math.max(...arr);
let answer = 0;
while (lt <= rt) {
  let mid = Math.floor((lt + rt) / 2);

  let sum = arr.reduce((pre, cur) => pre + Math.min(cur, mid), 0);

  if (sum > m) {
    rt = mid - 1;
  } else {
    lt = mid + 1;
    answer = mid;
  }
}

console.log(answer);
