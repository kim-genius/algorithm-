const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [T, arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = T.split(" ").map(Number);
arr = arr.split(" ").map(Number);

const pages = [];
for (let i = 1; i <= N; i++) {
  if (!arr.includes(i)) pages.push(i);
}

let last = 0;
let result = 0;
pages.forEach((page) => {
  if (last) {
    result += Math.min(7, (page - last) * 2);
  } else {
    result += 7;
  }
  last = page;
});

console.log(result);
