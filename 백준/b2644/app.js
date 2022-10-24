const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, t, m, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const graph = Array.from({ length: +n + 1 }, () => []);
const check = Array.from({ length: +n + 1 }, () => 0);
const [start, end] = t.split(" ").map(Number);

for (let i of input) {
  const [x, y] = i.split(" ");
  graph[x].push(y);
  graph[y].push(x);
}

let result = -1;
function dfs(v, l) {
  if (+v == end) {
    result = l;
    return;
  } else {
    for (let i = 0; i < graph[v].length; i++) {
      if (!check[graph[v][i]]) {
        check[graph[v][i]] = 1;
        dfs(graph[v][i], l + 1);
        check[graph[v][i]] = 0;
      }
    }
  }
}
dfs(start, 0);
console.log(result);
