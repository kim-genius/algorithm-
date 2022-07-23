const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const deque = [];
const result = [];

for (let x of input) {
  const [func, v] = x.split(" ");
  switch (func) {
    case "push_front":
      deque.unshift(v);
      break;
    case "push_back":
      deque.push(v);
      break;
    case "pop_front":
      deque.length ? result.push(deque.shift()) : result.push(-1);
      break;
    case "pop_back":
      deque.length ? result.push(deque.pop()) : result.push(-1);
      break;
    case "size":
      result.push(deque.length);
      break;
    case "empty":
      deque.length ? result.push(0) : result.push(1);
      break;
    case "front":
      deque.length ? result.push(deque[0]) : result.push(-1);
      break;
    case "back":
      deque.length ? result.push(deque[deque.length - 1]) : result.push(-1);
      break;

    default:
      break;
  }
}

console.log(result.join("\n"));
