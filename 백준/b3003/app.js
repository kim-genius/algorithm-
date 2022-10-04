const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const board = input.map((el) => el.split(""));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let cnt = 1;
let answer = [];

function DFS(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] == 1) {
      board[nx][ny] = 0;
      cnt++;
      DFS(nx, ny);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] == 1) {
      board[i][j] = 0;
      DFS(i, j);
      answer.push(cnt);
      cnt = 1;
    }
  }
}
console.log([answer.length, ...answer.sort((a, b) => a - b)].join("\n"));
