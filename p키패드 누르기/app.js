function solution(numbers, hand) {
  var answer = "";
  const _hand = hand === "right" ? "R" : "L";
  const leftLine = [1, 4, 7];
  const rightLine = [3, 6, 9];

  let leftPosition = [3, 0];
  let rightPosition = [3, 2];

  numbers.forEach((number) => {
    console.log(leftPosition, rightPosition, number);

    if (leftLine.includes(number)) {
      answer += "L";
      leftPosition = [parseInt((number - 1) / 3), (number - 1) % 3];
    } else if (rightLine.includes(number)) {
      answer += "R";
      rightPosition = [parseInt((number - 1) / 3), (number - 1) % 3];
    } else {
      const position =
        number === 0 ? [3, 1] : [parseInt((number - 1) / 3), (number - 1) % 3];

      const left =
        Math.abs(leftPosition[0] - position[0]) +
        Math.abs(leftPosition[1] - position[1]);

      const right =
        Math.abs(rightPosition[0] - position[0]) +
        Math.abs(rightPosition[1] - position[1]);

      if (left === right) {
        answer += _hand;
        _hand === "R"
          ? (rightPosition =
              number === 0
                ? [3, 1]
                : [parseInt((number - 1) / 3), (number - 1) % 3])
          : (leftPosition =
              number === 0
                ? [3, 1]
                : [parseInt((number - 1) / 3), (number - 1) % 3]);
      }
      if (left > right) {
        answer += "R";
        rightPosition =
          number === 0
            ? [3, 1]
            : [parseInt((number - 1) / 3), (number - 1) % 3];
      }
      if (left < right) {
        answer += "L";
        leftPosition =
          number === 0
            ? [3, 1]
            : [parseInt((number - 1) / 3), (number - 1) % 3];
      }
    }
  });

  return answer;
}

// "LRLLLRLLRRL"

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";
console.log(solution(numbers, hand));
