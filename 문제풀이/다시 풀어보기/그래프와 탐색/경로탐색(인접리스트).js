function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => []);
  let visited = Array.from({ length: n + 1 }).fill(false);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (!visited[graph[v][i]]) {
          visited[graph[v][i]] = true;
          DFS(graph[v][i]);
          visited[graph[v][i]] = false;
        }
      }
    }
  }
  visited[1] = true;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
