// 테스트는 다 통과했는데 뭐가 틀렸을까

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input[0].split(" ")[0]);
const k = Number(input[0].split(" ")[1]) - 1;

input.shift();

const arr = input.map((i) => i.split(" "));
arr.sort((a, b) => a[0] - b[0]);

let rank = 1;

const tarket = Number(arr[k][1] + arr[k][2] + arr[k][3]);
for (let i = 0; i < n; i++) {
  if (tarket < Number(arr[i][1] + arr[i][2] + arr[i][3])) {
    rank += 1;
  }
}

console.log(rank);
