const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const price = [25, 10, 5, 1];
for (let x of input) {
  const answer = [];

  for (let p of price) {
    answer.push(parseInt(x / p));
    x %= p;
  }
  console.log(answer.join(" "));
}
