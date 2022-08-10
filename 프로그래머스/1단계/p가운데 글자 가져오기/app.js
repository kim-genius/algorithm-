function solution(s) {
  let start =
    s.length % 2 === 0
      ? Math.floor(s.length / 2) - 1
      : Math.floor(s.length / 2);
  let end =
    s.length % 2 === 0 ? Math.ceil(s.length / 2) + 1 : Math.ceil(s.length / 2);
  var answer = s.slice(start, end);
  return answer;
}

console.log(solution("qwer"));
