const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dy = Array.from({ length: n }, () => 0);

dy[0] = arr[0];
dy[1] = arr[0] + arr[1];
dy[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < n; i++) {
  dy[i] = Math.max(dy[i - 2] + arr[i], dy[i - 3] + arr[i - 1] + arr[i]);
}

console.log(dy);
