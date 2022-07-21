function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    const sliceArr = array.slice(commands[i][0] - 1, commands[i][1]);
    sliceArr.sort((a, b) => a - b);
    console.log(sliceArr);
    answer.push(sliceArr[commands[i][2] - 1]);
  }

  return answer;
}

const array = [1, 30, 4, 21, 100000, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
