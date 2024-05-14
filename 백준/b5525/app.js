const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const M = +input[1];
const str = input[2];

let cnt = 0;
let pcnt = 0;

for (let i = 1; i < M; i++) {
  if (str[i - 1] === "I" && str[i] === "O" && str[i + 1] === "I") {
    pcnt += 1;
    if (pcnt === N) {
      pcnt--;
      cnt++;
    }
    i++;
  } else {
    pcnt = 0;
  }
}

console.log(cnt);
