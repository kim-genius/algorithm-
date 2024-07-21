const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = +n;
arr = input[0].split(" ").map(Number);
const [t, p] = input[1].split(" ").map(Number);

let T = 0;
for (let i = 0; i < arr.length; i++) {
  T += Math.ceil(arr[i] / t);
}

console.log(T);
console.log(Math.floor(n / p), n % p);
