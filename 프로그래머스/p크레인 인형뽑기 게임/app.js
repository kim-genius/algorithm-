function solution(board, moves) {
  let answer = 0;
  const N = board.length;
  let basket = [];

  moves.map((move) => {
    for (let i = 0; i < N; i++) {
      if (board[i][move - 1] !== 0) {
        basket.push(board[i][move - 1]);
        board[i][move - 1] = 0;
        break;
      }
    }

    while (
      basket.length > 0 &&
      basket[basket.length - 2] === basket[basket.length - 1]
    ) {
      basket = basket.slice(0, basket.length - 2);
      answer += 2;
    }
  });

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 2, 2],
  [2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];
const moves = [5, 1, 2, 4];

console.log(solution(board, moves));
