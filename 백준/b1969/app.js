const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = t.split(" ").map(Number);

let answer = "";
for (let i = 0; i < m; i++) {
  let nMap = new Map();
  for (let j = 0; j < n; j++) {
    if (nMap.has(input[j][i])) {
      nMap.set(input[j][i], nMap.get(input[j][i]) + 1);
    } else {
      nMap.set(input[j][i], 1);
    }
  }

  let sort = [...nMap].sort((a, b) => {
    if (b[1] > a[1]) return 1;
    if (b[1] < a[1]) return -1;
    if (b[0] > a[0]) return -1;
    if (b[0] < a[0]) return 1;
  });
  answer += sort[0][0];
}
let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (answer[j] != input[i][j]) {
      cnt++;
    }
  }
}
console.log(answer);

console.log(cnt);
