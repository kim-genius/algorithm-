const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i < 31; i++) {
  if (!input.includes(i.toString())) {
    console.log(i);
  }
}
