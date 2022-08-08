const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const white = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
const black = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const [N, M] = input[0].split(" ");
input.shift();

let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    let wconut = 0;
    let bconut = 0;
    for (let q = 0; q < 8; q++) {
      for (let t = 0; t < 8; t++) {
        if (white[q][t] !== input[i + q][j + t]) wconut++;
        if (black[q][t] !== input[i + q][j + t]) bconut++;
      }
    }
    min = Math.min(min, Math.min(wconut, bconut));
  }
}

console.log(min);
