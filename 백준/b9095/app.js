const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const dy = Array.from({ length: 11 }, () => 0);
const answer = [];
dy[0] = 1;
dy[1] = 1;
dy[2] = 2;
dy[3] = 4;

for (let i = 3; i < dy.length; i++) {
  dy[i] = dy[i - 3] + dy[i - 2] + dy[i - 1];
}

for (let i = 0; i < input[0]; i++) {
  answer.push(dy[input[i + 1]]);
}

console.log(answer.join("\n"));
