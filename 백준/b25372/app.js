const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < n; i++) {
  if (input[i].length >= 6 && input[i].length <= 9) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
