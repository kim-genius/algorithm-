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

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivot = [array[0]];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  return quickSort(left).concat(pivot, quickSort(right));
}
const sorted = quickSort([5, 3, 7, 1, 9]);
console.log(sorted);
