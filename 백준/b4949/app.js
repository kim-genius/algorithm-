const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = [];
for (let i = 0; i < input.length - 1; i++) {
  const stack = [];
  for (let j = 0; j < input[i].length; j++) {
    let x = input[i][j];

    if (x === "(" || x === "[") stack.push(x);
    else if (x === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else stack.push(x);
    } else if (x === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else stack.push(x);
    }
  }
  stack.length !== 0 ? answer.push("no") : answer.push("yes");
}
console.log(answer.join("\n"));
