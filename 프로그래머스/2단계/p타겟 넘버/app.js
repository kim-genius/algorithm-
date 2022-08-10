function solution(numbers, target) {
  var answer = 0;

  function DFS(level, sum) {
    if (level === numbers.length) {
      if (sum === target) answer++;
      return;
    } else {
      DFS(level + 1, sum + numbers[level]);
      DFS(level + 1, sum - numbers[level]);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
