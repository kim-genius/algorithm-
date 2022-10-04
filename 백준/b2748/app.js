const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let dy = Array.from({ length: input + 1 }, () => 0);

dy[1] = 1;

for (let i = 2; i < input + 1; i++) {
  dy[i] = BigInt(dy[i - 1]) + BigInt(dy[i - 2]);
}

console.log(dy[input].toString());

// 처음에는 틀렸는데 빅인트메서드로 해결 값이 너무큼
