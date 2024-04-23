const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, dna, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let [s, p] = a.split(" ").map(Number);
let [A, C, G, T] = arr.split(" ").map(Number);

let sH = { A: 0, C: 0, G: 0, T: 0 };

let answer = 0;

for (let i = 0; i < p; i++) {
  sH[dna[i]]++;
}

for (let i = 0; i <= s - p; i++) {
  if (i !== 0) {
    sH[dna[i - 1]]--;
    sH[dna[i + p - 1]]++;
  }

  if (sH["A"] >= A && sH["C"] >= C && sH["G"] >= G && sH["T"] >= T) {
    answer++;
  }
}
console.log(answer);
