function solution(n, computers) {
  var answer = 0;
  let visited = [false];
  function DFS(v) {
    visited[v] = true;
    for (let j = 0; j < computers[v].length; j++) {
      if (!visited[j] && computers[v][j] === 1) {
        DFS(j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      DFS(i);
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ])
// );
