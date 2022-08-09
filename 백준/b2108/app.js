const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let n = input[0];
input.shift();

const answer = [];
answer.push(Math.round(input.reduce((acc, cur) => acc + cur, 0) / n));
input.sort((a, b) => a - b);
answer.push(input[Math.floor(input.length / 2)]);

const counts = input.reduce((pv, cv) => {
  pv[cv] = (pv[cv] || 0) + 1;
  return pv;
}, {});

const result = [];
let max = Number.MIN_SAFE_INTEGER;
for (let key in counts) {
  if (max < counts[key]) max = counts[key];
  result.push([key, counts[key]]);
}
let newResult = result.filter((v) => v[1] === max);
newResult.sort((a, b) => b[0] - a[0]);
if (newResult.length > 1) {
  answer.push(+newResult[newResult.length - 2][0]);
} else {
  answer.push(+newResult[0][0]);
}
answer.push(input[input.length - 1] - input[0]);
console.log(answer.join("\n"));
