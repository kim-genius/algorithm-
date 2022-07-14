const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let cnt = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (input[i][j] === "F") {
      i % 2 === 0 ? j % 2 === 0 && cnt++ : j % 2 === 1 && cnt++;
    }
  }
}

console.log(cnt);
