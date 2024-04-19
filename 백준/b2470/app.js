const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let lt = 0;
let rt = n - 1;

let lNum = input[0];
let rNum = input[n - 1];

while (lt < rt) {
  if (Math.abs(input[lt] + input[rt]) < Math.abs(lNum + rNum)) {
    lNum = input[lt];
    rNum = input[rt];
  }
  if (lNum + rNum == 0) break;

  if (input[lt] + input[rt] > 0) {
    rt--;
  } else if (input[lt] + input[rt] < 0) {
    lt++;
  }
}

console.log(lNum, rNum);
