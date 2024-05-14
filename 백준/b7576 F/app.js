const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [m, n] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((v) => v.split(" ").map(Number));

let queue = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] == 1) {
      queue.push([i, j]);
    }
  }
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

while (queue.length > 0) {
  let x = queue.shift();

  for (let i = 0; i < 4; i++) {
    let nx = x[0] + dx[i];
    let ny = x[1] + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] == 0) {
      arr[nx][ny] = 1;
      queue.push([nx, ny]);
    }
  }
}

console.log(queue);
