const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input.split(" ").map(Number);
let answer = 0;

for (let i = 0; i < n; i++) {
  let flag = true;
  for (let j = 0; j < m; j++) {
    if (flag && arr[i][j] === "-") {
      answer++;
      flag = false;
    } else if (arr[i][j] === "|") {
      flag = true;
    }
  }
}

for (let i = 0; i < m; i++) {
  let flag = true;
  for (let j = 0; j < n; j++) {
    if (flag && arr[j][i] === "|") {
      answer++;
      flag = false;
    } else if (arr[j][i] === "-") {
      flag = true;
    }
  }
}
console.log(answer);
