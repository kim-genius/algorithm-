// 이진탐색해야함
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let sH = new Map();
const arr = [];

for (let x of input[1].split(" ")) {
  if (!sH.has(x)) sH.set(x, true);
}

for (let x of input[3].split(" ")) {
  sH.has(x) ? arr.push(1) : arr.push(0);
}

console.log(arr.join("\n"));
