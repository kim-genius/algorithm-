const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input.split(" ").map(Number);
arr = arr.map(Number);

let cnt = 1;
let answer = 0;
function DFS(v) {
  if (cnt >= n) return (answer = -1);
  if (v === k) {
    return (answer = cnt);
  } else {
    cnt++;
    DFS(arr[v]);
  }
}
DFS(arr[0]);
console.log(answer);
