const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M, B] = input.split(" ").map(Number);
let board = arr.map((a) => a.split(" ").map(Number));

let total = board.flat().reduce((acc, cur) => acc + cur, B);
let top = Math.floor(total / (N * M));

let minTime = Number.MAX_SAFE_INTEGER;
let floor = 0;
for (let i = 0; i <= top; i++) {
  let time = 0;
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (board[j][k] > i) {
        time += (board[j][k] - i) * 2;
      } else if (board[j][k] < i) {
        time += i - board[j][k];
      }
    }
  }
  if (minTime >= time) {
    minTime = time;
    floor = i;
  }
}
console.log(minTime, floor);
