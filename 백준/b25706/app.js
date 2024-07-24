const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

N = +N;
const arr = input.split(" ").map(Number);

const dp = Array.from({ length: N }, () => 0);

for (let i = N - 1; i >= 0; i--) {
  const step = i + arr[i] + 1;

  if (step >= N) {
    dp[i] = 1;
  } else {
    dp[i] = dp[step] + 1;
  }
}

console.log(dp);
