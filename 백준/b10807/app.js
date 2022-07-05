const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, arr, v] = input;
const a = arr.split(" ").filter((e) => v === e).length;

console.log(a);
