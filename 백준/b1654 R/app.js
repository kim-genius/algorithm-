const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
input.shift();
const arr = input.map(Number).sort((a, b) => a - b);
let lt = 0;
let rt = arr[arr.length - 1];
let res = Number.MIN_SAFE_INTEGER;

while (lt <= rt) {
  let cnt = 0;
  let mid = Math.floor((lt + rt) / 2);
  for (let x of arr) {
    cnt += Math.floor(x / mid);
  }

  if (cnt >= N) {
    if (mid > res) res = mid;
    lt = mid + 1;
  } else {
    rt = mid - 1;
  }
}
console.log(res);
