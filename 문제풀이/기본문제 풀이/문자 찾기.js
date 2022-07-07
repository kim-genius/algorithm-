function solution(s, f) {
  let answer = 0;

  for (let x of s) {
    if (x === f) answer++;
  }

  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
