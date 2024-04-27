const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let arr = input.slice(1);

let stack = [];
let answer = [];
for (let x of arr) {
  let str = x.split(" ").map(Number);
  switch (str[0]) {
    case 1:
      stack.push(str[1]);
      break;
    case 2:
      if (stack.length > 0) answer.push(stack.pop());
      else answer.push(-1);
      break;
    case 3:
      answer.push(stack.length);
      break;
    case 4:
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case 5:
      if (stack.length > 0) answer.push(stack[stack.length - 1]);
      else answer.push(-1);
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
