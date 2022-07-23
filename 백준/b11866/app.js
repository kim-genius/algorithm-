const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const queue = [...Array(N)].map((v, i) => i + 1);

const result = [];

while (queue.length) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }
  result.push(queue.shift());
}

console.log("<" + result.join(", ") + ">");
