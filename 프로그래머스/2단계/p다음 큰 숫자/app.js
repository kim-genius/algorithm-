function solution(n) {
  var answer = 0;
  let input = n.toString(2);
  let num = n;

  let i = 1;

  while (1) {
    if (
      input.replace(/[0]/g, "").length ===
      (num + i).toString(2).replace(/[0]/g, "").length
    ) {
      answer = num + i;
      break;
    }
    i++;
  }

  return answer;
}
