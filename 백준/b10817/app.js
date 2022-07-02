const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const n = input.map((i) => Number(i));
console.log(n.sort((a, b) => a - b)[1]);
