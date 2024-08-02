const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, r, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let res = 0;
function recursion(row, col, size) {
  if (row === r && col === c) {
    // 좌표 찾음
    console.log(res);
    return;
  } else {
    if (r >= row && r < row + size && c >= col && c < col + size) {
      // 영역 내에 있음
      size = parseInt(size / 2);
      recursion(row, col, size);
      recursion(row, col + size, size);
      recursion(row + size, col, size);
      recursion(row + size, col + size, size);
    } else res += size * size; // 좌표 못 찾음!
  }
}

recursion(0, 0, 2 ** n);
