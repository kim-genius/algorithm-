const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let dy = Array.from({ length: 16 }, () => 0);

for (let i = 0; i < 8; i++) {
  dy[i * 2] = +input[0][i];
  dy[i * 2 + 1] = +input[1][i];
}

while (dy.length > 2) {
  for (let i = 0; i < dy.length; i++) {
    dy[i] = (dy[i] + dy[i + 1]) % 10;
  }
  dy.pop();
}
console.log(dy.join(""));

// 초기값 다 넣어놓고 인접해있는거 더하다가 마지막꺼 제거
