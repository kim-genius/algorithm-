const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0].split(" ")[0];
const M = input[0].split(" ")[1];

input.shift();
const arr = input[0].split(" ").map((a) => Number(a));

const s = [];
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      if (arr[i] + arr[j] + arr[k] <= M) {
        s.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
}
console.log(s.sort((a, b) => b - a)[0]);
