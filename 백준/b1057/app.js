// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [n, zi, im] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

// let result = 0;

// while (zi !== im) {
//   zi = parseInt(zi / 2 + (zi % 2));
//   im = parseInt(im / 2 + (im % 2));
//   result++;
// }

// console.log(result !== 0 ? result : -1);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k, h] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let cnt = 0;

if (k > h) {
  [k, h] = [h, k];
}

while (1) {
  k = Math.ceil(k / 2);
  h = Math.ceil(h / 2);
  cnt++;

  if (k == h) {
    break;
  }
}
console.log(cnt);
