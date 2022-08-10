function solution(a) {
  let answer = a;

  let sum = a.reduce((acc, v) => {
    return acc + v;
  }, 0);

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (sum - a[i] - a[j] === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }

  return answer;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
