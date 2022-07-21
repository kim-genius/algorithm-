function solution(answers) {
  var answer = [];

  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const rank = [0, 0, 0];

  for (i = 0; i < answers.length; i++) {
    if (answers[i] === supo1[i % supo1.length]) {
      rank[0] += 1;
    }
    if (answers[i] === supo2[i % supo2.length]) {
      rank[1] += 1;
    }
    if (answers[i] === supo3[i % supo3.length]) {
      rank[2] += 1;
    }
  }

  rank.map((supo, i) => {
    if (Math.max(...rank) === supo) {
      answer.push(i + 1);
    }
  });

  return answer;
}

const answers = [1, 2, 3, 4, 5];
console.log(solution(answers));
