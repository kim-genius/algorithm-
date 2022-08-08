const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
input.shift();
const arr = input.map(Number);
let lt = 1;
let rt = Math.max(...arr);

while (lt <= rt) {
  let cnt = 0;
  let mid = parseInt((lt + rt) / 2);
  for (let x of arr) {
    cnt += parseInt(x / mid);
  }
  console.log(cnt);
  if (cnt <= N) {
    console.log(mid);
    if (cnt < N) {
      rt = mid - 1;
    }
  } else {
    lt = mid + 1;
  }
}
