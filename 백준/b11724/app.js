const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((v) => v.split(" ").map(Number));
let graph = Array.from(Array(n + 1), () => []);
let ch = Array.from(Array(n + 1), () => 0);
for (let x of arr) {
  graph[x[0]].push(x[1]);
  graph[x[1]].push(x[0]);
}

function DFS(s) {
  ch[s] = 1;
  for (let x of graph[s]) {
    if (ch[x] == 0) {
      DFS(x);
    }
  }
}

let ans = 0;
for (let i = 1; i <= n; i++) {
  if (!ch[i]) {
    DFS(i);
    ans++;
  }
}
console.log(ans);
