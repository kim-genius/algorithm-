const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let milk = 0;
let answer = 0;
let arr = input[0].split(" ");
for (let i = 0; i < N; i++) {
  if (arr[i] == milk) {
    answer++;
    milk++;
    if (milk > 2) milk = 0;
  }
}
console.log(answer);
