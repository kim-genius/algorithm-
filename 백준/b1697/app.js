const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let ch = Array.from({ length: 100000 + 1 }, () => 0);
let dis = Array.from({ length: 100000 + 1 }, () => 0);
let queue = [];
ch[n] = 1;
queue.push(n);
dis[n] = 0;

function solution() {
  if (n === k) return 0;
  while (queue.length > 0) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x * 2]) {
      if (nx === k) return dis[x] + 1;
      if (nx > 0 && nx <= 100000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
}

console.log(solution());
