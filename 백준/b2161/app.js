const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = Number(fs.readFileSync(filePath).toString());

const arr = [...Array(N)].map((i, index) => index + 1);
const result = [];

let flag = true;
while (arr.length > 0) {
  if (flag) {
    result.push(arr[0]);
    arr.shift(0, 1);
    flag = false;
  } else {
    arr.push(arr[0]);
    arr.shift(0, 1);
    flag = true;
  }
}
console.log(result.join(" "));
