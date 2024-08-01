const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...a] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let index = 0;
let answer = [];
while (t > 0) {
  let [N, M] = a[index++].split(" ");

  let A = a[index++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let B = a[index++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let cnt = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] > B[j]) {
        cnt++;
      } else break;
    }
  }

  answer.push(cnt);
  t--;
}

console.log(answer.join("\n"));
