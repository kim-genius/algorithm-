// 답이 모두맞는데 왜틀림?
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0].split(" ")[0]);

input.shift();

input = input.map((i) => i.split(" "));
input.sort((a, b) => a[0] - b[0]);

const package = Number(input[0][0]);
input.sort((a, b) => a[1] - b[1]);
const ea = Number(input[0][1]);

const a = parseInt(N / 6);
const b = N % 6;

const res = [];
res.push(a * package + b * ea);
res.push((a + 1) * package);
res.push(N * ea);
res.sort((a, b) => a - b);

console.log(res[0]);
