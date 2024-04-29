const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");

let arr = [];

let str = input;
while (str.length > 0) {
  arr.push(str.join(""));
  str.shift();
}

console.log(arr.sort().join("\n"));
