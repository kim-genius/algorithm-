const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

let i = 666;

let cnt = 0;
while (true) {
  if (i.toString().includes("666")) {
    cnt++;
  }
  if (cnt == input) {
    console.log(i);
    break;
  }
  i++;
}
