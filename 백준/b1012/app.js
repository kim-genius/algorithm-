const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let index = 0;
let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];

let answer = [];

while (t > 0) {
  let [m, n, k] = input[index++].split(" ");
  let cnt = 0;
  let arr = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < k; i++) {
    let [x, y] = input[index++].split(" ");
    arr[+y][+x] = 1;
  }

  function dfs(y, x) {
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && arr[ny][nx] === 1) {
        arr[ny][nx] = 0;
        dfs(ny, nx);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        cnt++;
        arr[i][j] = 0;
        dfs(i, j);
      }
    }
  }

  answer.push(cnt);
  t--;
}

console.log(answer.join("\n"));
