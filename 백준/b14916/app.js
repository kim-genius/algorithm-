const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let cnt = 0;
let no = [1, 3, 6, 8];
function solution(n) {
  if (input == 1 || input == 3) return -1;
  if (no.includes(n % 5)) {
    cnt = parseInt(n / 5) - 1;
    n = (n % 5) + 5;
  } else {
    cnt = parseInt(n / 5);
    n = n % 5;
  }
  cnt += n / 2;

  return cnt;
}

console.log(solution(input));
