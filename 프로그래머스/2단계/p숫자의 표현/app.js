function solution(n) {
  var answer = 1;

  let lt = 1,
    rt = 2;

  let sum = 1;
  while (lt < Math.ceil(n / 2)) {
    if (sum === n) {
      answer++;
      sum -= lt;
      lt++;
    } else if (sum < n) {
      sum += rt;
      rt++;
    } else {
      sum -= lt;
      lt++;
    }
  }

  return answer;
}
