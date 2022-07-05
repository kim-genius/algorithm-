const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let sum = 0;
input.map((i) => (sum += Number(i)));

console.log(sum);
