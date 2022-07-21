function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);

  sum = 0;
  for (let x of d) {
    sum += x;
    if (sum <= budget) answer++;
    else break;
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
