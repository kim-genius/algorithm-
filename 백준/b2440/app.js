const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const count = Number(input);

for (let i = 0; i < count; i++) {
  let start = "";
  for (let j = count - i; j > 0; j--) {
    start += "*";
  }
  console.log(start);
}
