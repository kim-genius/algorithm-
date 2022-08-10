const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input[0];
let m = +input[1];
let graph = Array.from(Array(n + 1), () => []);
let visited = Array.from({ length: n + 1 }, () => 0);
let cnt = 0;
input.splice(0, 2);

for (let edge of input) {
  const [start, dest] = edge.split(" ").map(Number);
  graph[start].push(dest);
  graph[dest].push(start);
}

visited[1] = 1;

function DFS(v) {
  for (let dest of graph[v]) {
    if (!visited[dest]) {
      visited[dest] = 1;
      cnt++;
      DFS(dest);
    }
  }
}
DFS(1);
console.log(cnt);
