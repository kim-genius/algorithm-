const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);

let honor = input.slice(1, N + 1).map((v) => {
  v = v.split(" ");
  return [v[0], +v[1]];
});
let caracter = input.slice(N + 1);
let answer = [];

for (let i = 0; i < M; i++) {
  let lt = 0;
  let rt = N - 1;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (honor[mid][1] < caracter[i]) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  answer.push(honor[lt][0]);
}

console.log(answer.join("\n"));
