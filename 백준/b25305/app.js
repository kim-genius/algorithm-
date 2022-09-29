const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const sorted = input.split(" ").sort((a, b) => b - a);
console.log(+sorted[t.split(" ")[1] - 1]);
