const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

for (let i = 0; i < input.length; i += 2) {
  let answer = "";
  let m = Number(input[i].split(" ")[1]);
  let queue = input[i + 1].split(" ").map((v) => Number(v));

  let cnt = 0;
  while (true) {
    const max = Math.max(...queue);
    const number = queue.shift();
    if (max === number) {
      cnt++;
      if (m === 0) {
        answer += cnt;
        break;
      }
    } else {
      queue.push(number);
    }

    if (m === 0) m = queue.length - 1;
    else m--;
  }

  console.log(answer);
}
