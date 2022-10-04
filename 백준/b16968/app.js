const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

const arr = [];
input[0] == "d" ? arr.push(10) : arr.push(26);

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
  arr.push(temp);
}

let sum = arr.reduce((pre, cur) => pre * cur, 1);
console.log(sum);
