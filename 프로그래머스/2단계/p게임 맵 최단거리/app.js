function solution(maps) {
  var answer = 0;
  let n = maps.length;
  let m = maps[0].length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    let [x, y, dis] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (maps[nx][ny] === 1) {
          maps[nx][ny] = dis + 1;
          queue.push([nx, ny, dis + 1]);
        }
      }
    }
  }
  if (n > 1 && m > 1 && maps[n - 1][m - 1] === 1) return -1;
  return maps[n - 1][m - 1];
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
