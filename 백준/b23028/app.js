const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, A, B] = t.split(" ").map(Number);

for (let i = 0; i < 8 - N; i++) {
  let [f, s] = input[i].split(" ").map(Number);
  A += f * 3;

  B += f * 3;

  if (f + s > 6) {
    if (6 - f < s) {
      s = 6 - f;
    }
  }
  B += s * 3;
}
if (A >= 66 && B >= 130) {
  console.log("Nice");
} else {
  console.log("Nae ga wae");
}
