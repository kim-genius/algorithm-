const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let arr = input[1].split(" ").map(Number);

let stack = [];
let index = 1;

for (let i = 0; i < N; i++) {
  if (index == arr[i]) {
    index++;
  } else {
    stack.push(arr[i]);
  }

  while (stack[stack.length - 1] == index) {
    stack.pop();
    index++;
  }
}
console.log(stack.length == 0 ? "Nice" : "Sad");
