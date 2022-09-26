const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let x of input) {
  let [f, s, t] = x.split(" ").map(Number);
  let answer = 0;

  while (1) {
    if (s - f == 1 && t - s == 1) {
      break;
    }
    if (s - f > t - s) {
      t = s;
      s = t - 1;
    } else {
      f = s;
      s = f + 1;
    }

    answer++;
  }
  console.log(answer);
}
