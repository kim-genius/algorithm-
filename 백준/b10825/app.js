const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let arr = input.slice(1).map((v) => v.trim().split(" "));

arr.sort((a, b) => {
  if (+a[1] === +b[1] && +a[2] === +b[2] && +a[3] === +b[3]) {
    for (let i = 0; i < 10; i++) {
      // 아스키코드로 변환한 숫자가 같으면 반복문 continue
      if (a[0].charCodeAt(i) === b[0].charCodeAt(i)) {
        continue;
        // 같지 않으면 오름차순으로 정렬
      } else {
        return a[0].charCodeAt(i) - b[0].charCodeAt(i);
      }
    }
  } else if (+a[1] === +b[1] && +a[2] === +b[2]) {
    return +b[3] - +a[3];
  } else if (+a[1] === +b[1]) {
    return +a[2] - +b[2];
  } else {
    return +b[1] - +a[1];
  }
});

let answer = [];
for (let x of arr) {
  answer.push(x[0]);
}

console.log(answer.join("\n"));
