function solution(s) {
  var answer = true;
  const stack = [];

  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.pop() !== "(") {
        answer = false;
        break;
      }
    }
  }
  if (stack.length) answer = false;

  return answer;
}
