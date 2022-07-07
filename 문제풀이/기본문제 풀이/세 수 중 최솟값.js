function solution(a, b, c) {
  let answer;

  a > b ? (answer = b) : (answer = a);
  if (answer > c) answer = c;

  return answer;
}

console.log(solution(2, 5, 1));
