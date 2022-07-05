const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0].split(" ")[0];
const M = input[0].split(" ")[1];
input.shift();

const arr1 = input.slice(0, N);
const arr2 = input.slice(N);

const res = [];
for (let i = 0; i < N; i++) {
  const temp = [];
  for (let j = 0; j < M; j++) {
    temp.push(Number(arr1[i].split(" ")[j]) + Number(arr2[i].split(" ")[j]));
  }
  res.push(temp);
}

res.map((r) => console.log(r.join(" ")));
