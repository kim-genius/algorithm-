const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);

input.shift();

const rank = [...Array(N)].fill(1);

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const pi = input[i].split(" ");
    const pj = input[j].split(" ");

    if (Number(pi[1]) > Number(pj[1])) {
      rank[j]++;
    } else if (Number(pi[1]) < Number(pj[1])) {
      rank[i]++;
    }

    if (Number(pi[1]) === Number(pj[1]) && Number(pi[2]) > Number(pj[2])) {
      rank[j]++;
    } else if (
      Number(pi[1]) === Number(pj[1]) &&
      Number(pi[2]) < Number(pj[2])
    ) {
      rank[i]++;
    }

    if (
      Number(pi[1]) === Number(pj[1]) &&
      Number(pi[2]) === Number(pj[2]) &&
      Number(pi[3]) > Number(pj[3])
    ) {
      rank[j]++;
    } else if (
      Number(pi[1]) === Number(pj[1]) &&
      Number(pi[2]) === Number(pj[2]) &&
      Number(pi[3]) < Number(pj[3])
    ) {
      rank[i]++;
    }
  }
}
console.log(rank[K - 1]);
