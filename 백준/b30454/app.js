const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [e, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, l] = e.split(" ");

let result = new Map();

for (let i = 0; i < n; i++) {
  let str = input[i].trim();
  let cnt = str.split("0").filter((v) => v !== "").length;

  if (result.get(cnt)) {
    result.set(cnt, result.get(cnt) + 1);
  } else {
    result.set(cnt, 1);
  }
}

let max = Number.MIN_SAFE_INTEGER;
let index = 0;
result.forEach((v, k) => {
  if (max < k) {
    max = k;
    index = v;
  }
});

console.log(max, result.get(max));
