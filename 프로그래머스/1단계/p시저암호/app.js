function solution(s, n) {
  var answer = "";
  for (let x of s) {
    if (x !== " ") {
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
        let next =
          x.charCodeAt() + n > 90
            ? x.charCodeAt() + n - 26
            : x.charCodeAt() + n;

        answer += String.fromCharCode(next);
      } else {
        let next =
          x.charCodeAt() + n > 122
            ? x.charCodeAt() + n - 26
            : x.charCodeAt() + n;

        answer += String.fromCharCode(next);
      }
    } else {
      answer += x;
    }
  }

  return answer;
}
