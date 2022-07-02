const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0];
input.shift();

const person = input.map((i) => [
  Number(i.split(" ")[0]),
  Number(i.split(" ")[1]),
]);

const res = [];
for (let i = 0; i < N; i++) {
  let rank = 0;
  for (let j = 0; j < N; j++) {
    if (i === j) {
      continue;
    }
    if (person[i][0] < person[j][0]) {
      if (person[i][1] < person[j][1]) {
        rank += 1;
      }
    }
  }
  res.push(rank + 1);
}

console.log(res.join(" "));
