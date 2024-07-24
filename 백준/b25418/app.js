const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [A, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dp = Array.from({ length: K + 1 }, () => 1000001);

dp[A] = 0;

for (let i = A + 1; i <= K; i++) {
  dp[i] = dp[i - 1];

  if (i % 2 === 0 && dp[i] > dp[i / 2]) {
    dp[i] = dp[i / 2];
  }
  dp[i]++;
}

console.log(dp[K]);
