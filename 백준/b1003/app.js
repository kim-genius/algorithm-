const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [len, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < len; i++) {
  const n = arr[i];

  const fibonacci = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= n; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }

  console.log(fibonacci[n].join(" "));
}
