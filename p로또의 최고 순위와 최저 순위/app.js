function solution(lottos, win_nums) {
  let rank = 7;
  let zeroCount = 0;
  lottos.forEach((number) => {
    if (win_nums.includes(number)) {
      rank -= 1;
    }
    if (number === 0) {
      zeroCount += 1;
    }
  });

  return zeroCount === 6
    ? [1, 6]
    : [rank - zeroCount > 6 ? 6 : rank - zeroCount, rank > 6 ? 6 : rank];
}

const lottos = [20, 20, 20, 20, 3, 2];
const win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));
