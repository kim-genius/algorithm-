function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1];
console.log(solution(arr));
