const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = new Map();
const answer = [];
for (let i = 0; i < N; i++) {
  const [site, pwd] = input[i].split(" ");
  map.set(site, pwd);
}

for (let i = N; i < N + M; i++) {
  answer.push(map.get(input[i]));
}

console.log(answer.join("\n"));
