function solution(n, arr) {
  let answer = 0;

  for (let x of arr) {
    if (x % 10 === n) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
