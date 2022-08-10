const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...board] = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M, V] = input.split(" ").map(Number);
let graph = Array.from(Array(N + 1), () => []);

for (let x of board) {
  const [a, b] = x.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
console.log(graph);
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

let visited = Array(N + 1).fill(false);
let answer_dfs = [];

// dfs
function DFS(v) {
  if (visited[v]) return;
  visited[v] = true;
  answer_dfs.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (!visited[next]) {
      DFS(next);
    }
  }
}
DFS(V);
console.log(answer_dfs.join(" "));

let answer_bfs = [];
visited.fill(0);

// bfs
function BFS(v) {
  let queue = [v];
  while (queue.length) {
    let x = queue.shift();
    if (visited[x]) continue;
    visited[x] = true;
    answer_bfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}
BFS(V);
console.log(answer_bfs.join(" "));
