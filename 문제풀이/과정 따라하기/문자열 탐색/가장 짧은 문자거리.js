function solution(s, t) {
  let answer = [];

  let p = 1000;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t) {
      p++;
    } else {
      p = 0;
    }
    answer.push(p);
  }
  console.log(answer);

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
