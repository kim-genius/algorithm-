const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

for (let i = 0; i < input.length; i++) {
  let answer = "YES";
  let stack = [];
  for (let x of input[i]) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        answer = "NO";
        break;
      }
      stack.pop();
    }
  }
  if (stack.length > 0) answer = "NO";
  console.log(answer);
}
