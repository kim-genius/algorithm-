const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

function fibonacci(n) {
  if (n < 3) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

let cnt = 0;
let dy = Array.from({ length: input + 1 }, () => 0);
dy[1] = 1;
for (let i = 3; i < input + 1; i++) {
  cnt++;
  dy[i] = BigInt(dy[i - 1]) + BigInt(dy[i - 2]);
}

console.log(fibonacci(input), cnt);
