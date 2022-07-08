function solution(s) {
  let answer = "YES";
  let ls = s.toLowerCase();

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (ls[i] !== ls[s.length - 1 - i]) {
      return "NO";
    }
  }

  return answer;
}

console.log(solution("goooG"));
