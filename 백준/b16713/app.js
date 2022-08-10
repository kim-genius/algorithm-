const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const board = arr.map((v) => v.split(" ").map((w) => +w));
let isVisited = Array.from(Array(N), () => new Array(N).fill(false));

let q = [];
q.push([0, 0]);
isVisited[0][0] = true;
let answer = false;

while (q.length > 0) {
  let [y, x] = q.shift();
  let v = board[y][x];
  if (v == -1) {
    answer = true;
    break;
  } else {
    if (y + v < N && !isVisited[y + v][x]) {
      q.push([y + v, x]);
      isVisited[y + v][x] = true;
    }
    if (x + v < N && !isVisited[y][x + v]) {
      q.push([y, x + v]);
      isVisited[y][x + v] = true;
    }
  }
}

console.log(answer ? "HaruHaru" : "Hing");
