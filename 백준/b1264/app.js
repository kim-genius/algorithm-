const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const filter = ["a", "e", "i", "o", "u"];
const answer = [];
for (let x of input) {
  let sum = 0;
  for (let k of x) {
    if (filter.includes(k.toLowerCase())) {
      sum++;
    }
  }
  answer.push(sum);
}
console.log(answer.join("\n"));
