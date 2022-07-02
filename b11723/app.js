// 메모리 이슈

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const M = input[0];
input.shift();

let S = [];

for (let i = 0; i < M; i++) {
  const op = input[i].split(" ")[0];
  const num = Number(input[i].split(" ")[1]);

  if (op === "add") {
    if (!S.includes(num)) {
      S.push(num);
    }
    continue;
  }
  if (op === "remove") {
    if (S.includes(num)) {
      S.splice(S.indexOf(num), 1);
    }
    continue;
  }
  if (op === "check") {
    console.log(S.includes(num) ? 1 : 0);
    continue;
  }
  if (op === "toggle") {
    if (!S.includes(num)) {
      S.push(num);
    } else {
      S.splice(S.indexOf(num), 1);
    }
    continue;
  }
  if (op === "all") {
    S = [...Array(20).map((i, index) => index + 1)];
    continue;
  }
  if (op === "empty") {
    S = [];
    continue;
  }
}
