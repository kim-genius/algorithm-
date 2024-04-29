const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let n = +input[0];
let arr = input[1].split(" ").map(Number);
let set = [...new Set([...arr])].sort((a, b) => a - b);
let object = {};

set.forEach((item, index) => (object[item] = index));

let answer = [];

for (let i = 0; i < n; i++) {
  answer.push(object[arr[i]]);
}
console.log(answer.join(" "));
