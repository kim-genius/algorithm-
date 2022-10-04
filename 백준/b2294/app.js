const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map(Number);
const [n, k] = t.split(" ").map(Number);
const dy = Array.from({ length: k + 1 }, () => 10001);

for (let x of input) {
  dy[x] = 1;
}

for (let i = 1; i <= k; i++) {
  for (let x of input) {
    if (dy[i - x]) dy[i] = Math.min(dy[i], dy[i - x] + 1);
  }
}

dy[k] === 10001 ? console.log(-1) : console.log(dy[k]);

// DP로 해결 가지고 있는 동전을 기본으로 배열에 할당, 전체 배열을 탐색하면서 가지고 있는 동전으로 올수 있는가를 판단
