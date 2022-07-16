const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
console.log(input);

// const N = Number(input[0].split(" ")[0]);
// const K = Number(input[0].split(" ")[1]);

// input.shift();

// const arr = [];
// const rank = [...Array(N)].fill(1);

// input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

// for (let i = 0; i < N; i++) {
//   const [a, ...b] = input[i].split(" ");
//   arr.push(Number(b.join("")));
// }

// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < N; j++) {
//     if (arr[i] > arr[j]) rank[j]++;
//   }
// }
// console.log(rank);

// console.log(rank[K - 1]);
