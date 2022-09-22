function solution(brown, yellow) {
  var answer = [];
  let total = brown + yellow;

  for (let i = 3; i < parseInt(total / 2); i++) {
    if (
      total % i === 0 &&
      i >= total / i &&
      i * 2 + (total / i) * 2 - 4 === brown
    ) {
      answer = [i, total / i];
    }
  }

  return answer;
}
