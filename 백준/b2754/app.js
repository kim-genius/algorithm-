const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");

let res = 0;

switch (input[0]) {
  case "A":
    res += 4;
    break;
  case "B":
    res += 3;
    break;
  case "C":
    res += 2;
    break;
  case "D":
    res += 1;
    break;
  default:
    break;
}
switch (input[1]) {
  case "+":
    res += 0.3;
    break;
  case "0":
    res += 0;
    break;
  case "-":
    res -= 0.3;
    break;
  default:
    break;
}

console.log(res.toFixed(1));
