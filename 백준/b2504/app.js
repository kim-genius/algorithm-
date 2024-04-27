const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const str = input.shift().trim();

const stack = [];

let answer = 0,
  temp = 1;

for (let i = 0; i < str.length; i++) {
  const ch = str[i];
  if (ch === "(") {
    stack.push(ch);
    temp *= 2;
  } else if (ch === "[") {
    stack.push(ch);
    temp *= 3;
  } else {
    const pop = stack.pop();
    if (ch === ")") {
      if (!pop || pop === "[") {
        console.log(0);
        return;
      }
      if (str[i - 1] == "(") {
        answer += temp;
        temp /= 2;
      } else {
        temp /= 2;
      }
    } else {
      if (!pop || pop === "(") {
        console.log(0);
        return;
      }
      if (str[i - 1] == "[") {
        answer += temp;
        temp /= 3;
      } else {
        temp /= 3;
      }
    }
  }

  console.log(i, temp, stack, answer);
}

if (stack.length > 0) {
  answer = 0;
}
console.log(answer);
