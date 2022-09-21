function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);

  let lt = 0,
    rt = people.length - 1;

  while (lt <= rt) {
    if (people[lt] + people[rt] > limit) {
      lt++;
      answer++;
    } else {
      lt++;
      rt--;
      answer++;
    }
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
