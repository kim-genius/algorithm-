const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const set = [1, 1, 2, 2, 2, 8];
for (let i = 0; i < input.length; i++) {
  set[i] = set[i] - input[i];
}
console.log(set.join(" "));
