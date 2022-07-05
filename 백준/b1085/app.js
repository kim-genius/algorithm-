const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const [x, y, w, h] = input;

console.log(w - x);
console.log(Math.abs(0 - x));
console.log(h - y);
console.log(Math.abs(0 - y));
console.log(Math.min(w - x, Math.abs(0 - x), h - y, Math.abs(0 - y)));
