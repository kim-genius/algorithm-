function solution(N, stages) {
  const ratios = [];
  let person = stages.length;

  for (let i = 1; i <= N; i++) {
    const fail = stages.filter((stage) => stage === i).length;
    ratios.push([i, fail / person]);
    person -= fail;
  }

  ratios.sort((a, b) => {
    if (b[1] > a[1]) return 1;
    if (b[1] < a[1]) return -1;
  });

  return ratios.map((ratio) => ratio[0]);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));
