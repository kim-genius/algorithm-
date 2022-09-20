function solution(n) {
  let answer = 1;
  let max = n[0];

  for (let i = 1; i < n.length; i++) {
    if (max < n[i]) {
      answer++;
      max = n[i];
    }
  }

  return answer;
}

const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
