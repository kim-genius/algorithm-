function solution(a, b, c) {
  let answer = [a, b, c];

  answer.sort((a, b) => a - b);

  if (answer[0] + answer[1] > answer[2]) {
    return "yes";
  }
  return "no";
}

console.log(solution(13, 33, 17));
