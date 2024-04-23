const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, s] = a.split(" ").map(Number);

arr = arr.split(" ").map(Number);

let answer = Number.MAX_SAFE_INTEGER;
let lt = 0;
let sum = 0;

for (let rt = 0; rt < n; rt++) {
  sum += arr[rt];

  while (sum >= s) {
    sum -= arr[lt];
    answer = Math.min(answer, rt - lt + 1);
    lt++;
  }
}

if (answer === Number.MAX_SAFE_INTEGER) {
  console.log(0);
} else {
  console.log(answer);
}
