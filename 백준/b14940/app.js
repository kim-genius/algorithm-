const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((v) => v.split(" ").map(Number));
let ch = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

let start = [0, 0];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 2) {
      start = [i, j];
      arr[i][j] = 0;
      break;
    }
  }
}
let queue = [start];
ch[start[0]][start[1]] = 1;

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

while (queue.length) {
  let x = queue.shift();
  for (let i = 0; i < 4; i++) {
    let nx = x[0] + dx[i];
    let ny = x[1] + dy[i];

    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      ch[nx][ny] === 0 &&
      arr[nx][ny] != 0
    ) {
      ch[nx][ny] = 1;
      arr[nx][ny] = arr[x[0]][x[1]] + 1;
      queue.push([nx, ny]);
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (!ch[i][j] && arr[i][j] === 1) {
      arr[i][j] = -1;
    }
  }
}

let answer = [];

for (let i = 0; i < arr.length; i++) {
  answer.push(arr[i].join(" "));
}

console.log(answer.join("\n"));
