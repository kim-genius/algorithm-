const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const map = new Map();
const answer = [];
for (let i = 0; i < N; i++) {
  map.set(input[i], i + 1);
}

for (let i = N; i < N + M; i++) {
  if (isNaN(input[i])) {
    answer.push(map.get(input[i]));
  } else {
    answer.push(input[input[i] - 1]);
  }
}
console.log(answer.join("\n"));
