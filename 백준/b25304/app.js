const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let x of input) {
  const [price, cnt] = x.split(" ").map(Number);
  total -= price * cnt;
}
total ? console.log("No") : console.log("Yes");
