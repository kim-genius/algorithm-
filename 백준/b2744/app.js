const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let res = "";

for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 122) {
    res += input[i].toUpperCase();
  } else {
    res += input[i].toLowerCase();
  }
}
console.log(res);
