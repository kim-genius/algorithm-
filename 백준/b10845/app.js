const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const queue = [];
input.shift();

const answer = [];

for (let x of input) {
  const a = x.split(" ")[0];
  const b = x.split(" ")[1];
  if (a === "push") queue.push(b);
  else if (a === "pop") answer.push(queue.length === 0 ? -1 : queue.shift());
  else if (a === "size") answer.push(queue.length);
  else if (a === "empty") answer.push(queue.length === 0 ? 1 : 0);
  else if (a === "front") answer.push(queue.length === 0 ? -1 : queue[0]);
  else if (a === "back")
    answer.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
}

console.log(answer.join("\n"));
