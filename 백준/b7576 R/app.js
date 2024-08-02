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

let head = 0;
if (queue.length === m * n) {
  console.log(0);
} else {
  while (queue.length > head) {
    let [y, x] = queue[head++];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && arr[ny][nx] === 0) {
        arr[ny][nx] = arr[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }

  let result = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == 0) {
        console.log(-1);
        return;
      }
      result = Math.max(result, arr[i][j] - 1);
    }
  }
  console.log(result);
}
