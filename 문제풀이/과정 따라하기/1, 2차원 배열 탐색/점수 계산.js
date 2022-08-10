function solution(arr) {
  let answer = 0;

  let bonus = 0;
  for (let x of arr) {
    if (x) {
      answer += 1 + bonus;
      bonus++;
    } else {
      bonus = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
