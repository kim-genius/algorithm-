const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let n = +input[0];
let arr = input.slice(1).map((v) => v.trim());
arr.sort((a, b) => a.length - b.length);

let answer = n;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j].slice(0, arr[i].length)) {
      answer -= 1;
      break;
    }
  }
}
console.log(answer);
