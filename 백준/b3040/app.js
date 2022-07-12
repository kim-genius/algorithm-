const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => Number(i))
  .sort((a, b) => a - b);

const sum = input.reduce((a, b) => a + b, 0);

let flag = false;
for (let i = 0; i < input.length - 1; i++) {
  if (flag) break;
  for (let j = i + 1; j < input.length; j++) {
    if (flag) break;
    if (sum - input[i] - input[j] === 100) {
      input.splice(j, 1);
      input.splice(i, 1);
      flag = true;
    }
  }
}
for (let i = 0; i < 7; i++) console.log(input[i]);
