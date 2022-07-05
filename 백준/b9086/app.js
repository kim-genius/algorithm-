const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = input[0];
input.shift();

for (let i = 0; i < T; i++) {
  console.log(`${input[i][0]}${input[i][input[i].length - 1]}`);
}
