const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = +require("fs").readFileSync(filePath).toString().trim();

let dp = [0, 1, 2];

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[N]);
