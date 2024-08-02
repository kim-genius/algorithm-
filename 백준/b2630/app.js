const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input = input.map((v) => v.split(" "));

let white = 0;
let blue = 0;

function recursion(n, x, y) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += +input[y + j][x + i];
    }
  }

  if (total === 0) white++;
  else if (total === n * n) blue++;
  else {
    recursion(n / 2, x, y);
    recursion(n / 2, x + n / 2, y);
    recursion(n / 2, x, y + n / 2);
    recursion(n / 2, x + n / 2, y + n / 2);
  }
}

recursion(n, 0, 0);
console.log(white);
console.log(blue);
