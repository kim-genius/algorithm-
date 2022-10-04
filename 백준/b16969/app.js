const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let sum = 1;
input[0] == "d" ? (sum = 10) : (sum = 26);

for (let i = 1; i < input.length; i++) {
  let temp;
  if (input[i] == "d") {
    temp = 10;
  } else {
    temp = 26;
  }
  if (input[i - 1] == input[i]) {
    temp--;
  }
  sum *= temp;
  sum %= 1000000009;
}

console.log(sum);

// 1000000009 나머지 연산이 맞지않길래 알고보니 반복할때마다 나머지를 구하던거 였다 홀리
