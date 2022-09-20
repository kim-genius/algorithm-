function solution(n, words) {
  var answer = [0, 0];
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let p = (i % n) + 1;
    let turn = Math.ceil((i + 1) / n);

    let last = words[i - 1].split("").pop();
    if (i > words.indexOf(word) || word[0] !== last) {
      answer = [p, turn];
      break;
    }
  }
  return answer;
}
