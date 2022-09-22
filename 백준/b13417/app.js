const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = [];
for (let t = 0; t < input.length; t += 2) {
  let arr = input[t + 1].split(" ");
  let tmp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let front = arr[i] + tmp;
    let back = tmp + arr[i];
    if (front > back) {
      tmp = back;
    } else {
      tmp = front;
    }
  }
  answer.push(tmp);
}

console.log(answer.join("\n"));
