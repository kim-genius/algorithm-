function solution(sizes) {
  let maxX = Number.MIN_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;

  for (let x of sizes) {
    if (x[0] < x[1]) [x[0], x[1]] = [x[1], x[0]];

    maxX = Math.max(maxX, x[0]);
    maxY = Math.max(maxY, x[1]);
  }

  return maxX * maxY;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
