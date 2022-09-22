function isPrime(num) {
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

function solution(numbers) {
  let n = numbers.length;
  var answer = 0;
  let temp = Array.from({ length: n }, () => 0);
  let visited = Array.from({ length: n }, () => 0);
  let cnt = 0;
  function DFS(L) {
    if (L === n) {
      cnt++;
      if (isPrime(+temp.join(""))) {
        answer++;
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (visited[i] === 0) {
          visited[i] = 1;
          temp[L] = numbers[i];
          DFS(L + 1);
          visited[i] = 0;
        }
      }
    }
  }
  DFS(0);

  return answer;
}

console.log(solution("17"));
