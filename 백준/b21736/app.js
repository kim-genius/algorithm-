const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((v) => v.split(""));
let doo = [0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === "I") doo = [i, j];
  }
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let answer = 0;
function DFS(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (arr[nx][ny] == "O") {
        arr[nx][ny] = "X";
        DFS(nx, ny);
      } else if (arr[nx][ny] == "P") {
        answer++;
        arr[nx][ny] = "X";
        DFS(nx, ny);
      }
    }
  }
}
DFS(doo[0], doo[1]);
console.log(answer > 0 ? answer : "TT");
