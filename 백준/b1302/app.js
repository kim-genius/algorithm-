const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let sH = new Map();

input.shift();
input.sort();
let max = Number.MIN_SAFE_INTEGER;
let answer = "";
for (let x of input) {
  if (!sH.has(x)) sH.set(x, 1);
  else sH.set(x, sH.get(x) + 1);

  if (sH.get(x) > max) {
    answer = x;
    max = sH.get(x);
  }
}

console.log(answer);
