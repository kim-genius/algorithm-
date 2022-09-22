const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [str, s] = fs.readFileSync(filePath).toString().trim().split("\n");

let cnt = 0;
let i = 0;
while (i < str.length) {
  let index = str.indexOf(s, i);
  if (index >= 0) {
    i = index + s.length;
    cnt++;
  } else {
    i++;
  }
}
console.log(cnt);
