const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = fs.readFileSync(filePath).toString().trim();

let answer = [];
for (let n = 1; n <= N; n++) {
  let line = "";
  for (let i = 0; i < N - n; i++) {
    line += " ";
  }
  for (let j = 0; j < n * 2 - 1; j++) {
    line += "*";
  }
  answer.push(line);
}
console.log(answer.join("\n"));
