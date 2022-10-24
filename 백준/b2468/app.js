const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let max = Number.MIN_SAFE_INTEGER;
const board = input.map((row) => {
  const sp = row.split(" ").map(Number);
  max = Math.max(max, ...sp);
  return sp;
});

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let answer = 1;
for (let t = 1; t < max; t++) {
  const tmp = JSON.parse(JSON.stringify(board));

  function dfs(x, y) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && tmp[nx][ny] != 0 && tmp[nx][ny] > t) {
        tmp[nx][ny] = 0;
        dfs(nx, ny);
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (tmp[i][j] > t) {
        cnt++;
        dfs(i, j);
      }
    }
  }
  answer = Math.max(answer, cnt);
}

console.log(answer);
