const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const answer = [];
const dy = Array.from({ length: N + 1 }, () => 0);
for (let i = 1; i <= N; i++) {
  dy[i] = dy[i - 1] + arr[i - 1];
}

for (let t = 2; t < M + 2; t++) {
  const [i, j] = input[t].split(" ");

  answer.push(dy[j] - dy[i - 1]);
}

console.log(answer.join("\n"));
