const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function Rec(cnt, arr) {
  if (arr.toString().length === 1) {
    console.log(cnt);
    console.log(arr % 3 === 0 ? "YES" : "NO");
    return;
  } else {
    const sum = arr
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b), 0);
    Rec(cnt + 1, sum);
  }
}

Rec(0, input);
