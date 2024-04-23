const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let answer = Number.MAX_SAFE_INTEGER;

let cnt = 0;
let lt = arr.indexOf(1);

for (let rt = lt; rt < n; rt++) {
  if (arr[rt] === 1) cnt++;

  if (cnt === k) {
    answer = Math.min(answer, rt - lt + 1);
    lt++;
    cnt--;
    while (arr[lt] != 1) {
      lt++;
    }
  }
}

if (answer == Number.MAX_SAFE_INTEGER) console.log(-1);
else console.log(answer);
