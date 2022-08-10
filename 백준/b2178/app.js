const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...board] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input.split(" ").map(Number);
let map = board.map((b) => b.split("").map(Number));

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let stack = [[0, 0, 1]];
while (stack.length) {
  const [x, y, dis] = stack.shift();

  for (let i = 0; i < 4; i++) {
    const xPos = x + dir[i][0];
    const yPos = y + dir[i][1];

    if (
      xPos >= 0 &&
      xPos < n &&
      yPos >= 0 &&
      yPos < m &&
      map[xPos][yPos] === 1
    ) {
      map[xPos][yPos] = dis + 1;
      stack.push([xPos, yPos, dis + 1]);
    }
  }
}

console.log(map[n - 1][m - 1]);
