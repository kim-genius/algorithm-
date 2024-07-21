const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  if (!Number.isNaN(+input[i])) {
    const nextNum = +input[i] + 3 - i;
    let answer = "";

    if (nextNum % 3 === 0) answer += "Fizz";
    if (nextNum % 5 === 0) answer += "Buzz";

    console.log(answer || nextNum);
    break;
  }
}
