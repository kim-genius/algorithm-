const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = t.split(" ").map(Number);
let [j, ...apple] = input.map(Number);

let lt = 1;
let rt = m;
let res = 0;
for (let x of apple) {
  if (x >= rt) {
    let move = x - rt;
    rt += move;
    lt += move;
    res += move;
  } else if (x <= lt) {
    let move = lt - x;
    rt -= move;
    lt -= move;
    res += move;
  }
}
console.log(res);
