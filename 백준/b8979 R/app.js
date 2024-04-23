const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, K] = input[0].split(" ").map(Number);

let arr = input
  .slice(1)
  .map((v) => v.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

let answer = arr.filter(
  (v) =>
    v[1] > arr[K - 1][1] ||
    (v[1] == arr[K - 1][1] && v[2] > arr[K - 1][2]) ||
    (v[1] == arr[K - 1][1] && v[2] == arr[K - 1][2] && v[3] > arr[K - 1][3])
);

console.log(answer.length + 1);
