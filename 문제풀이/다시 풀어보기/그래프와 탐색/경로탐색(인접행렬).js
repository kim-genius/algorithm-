function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let visited = Array.from({ length: n + 1 }).fill(false);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] && !visited[i]) {
          visited[i] = true;
          DFS(i);
          visited[i] = false;
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
