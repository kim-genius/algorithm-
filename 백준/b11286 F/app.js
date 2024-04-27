const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let arr = input.slice(1).map(Number);

let queue = [];

for (let x of arr) {
  if (x === 0) {
    solution(queue);
    break;
  } else {
    queue.push(x);
  }
}

function solution(arr) {
  let minIndex = 0;
  let minNum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[minIndex]) > Math.abs(arr[i])) {
      minIndex = i;
      minNum = arr[i];
    } else if (Math.abs(arr[minIndex]) === Math.abs(arr[i]) && arr[minIndex] > arr[i]) {
      minIndex = i;
      minNum = arr[i];
    }
  }

  console.log(minIndex);

  return minIndex;
}
