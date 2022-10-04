const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = fs.readFileSync(filePath).toString().trim();

let answer = [];
for (let i = N; i > 0; i--) {
  let j = 0;
  let line = "";
  for (j = 0; j < N - i; j++) {
    line += " ";
  }
  for (let k = 0; k < N - j; k++) {
    line += "*";
  }
  answer.push(line);
}
console.log(answer.join("\n"));
