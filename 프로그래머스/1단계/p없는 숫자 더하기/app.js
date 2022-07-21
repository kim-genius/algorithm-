function solution(numbers) {
  var answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

const numbers = [5, 8, 4, 0, 6, 7, 9];
console.log(solution(numbers));
