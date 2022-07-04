function solution(dartResult) {
  var answer = 0;

  const empArr = [];

  for (let i = 0; i < dartResult.length; i++) {
    let temp = "";
    temp = dartResult[i];

    if (isNaN(dartResult[i])) {
      switch (dartResult[i]) {
        case "S":
          empArr.push(1);
          break;
        case "D":
          empArr.push(2);
          break;
        case "T":
          empArr.push(3);
          break;
        default:
          empArr.push(dartResult[i]);
          break;
      }
    } else if (!isNaN(dartResult[i + 1])) {
      temp += dartResult[i + 1];
      empArr.push(Number(temp));
      i++;
    } else {
      empArr.push(temp);
    }
  }

  const calcArr = [];

  for (let i = 0; i < empArr.length; i++) {
    const calc = Number(empArr[i]) ** Number(empArr[i + 1]);

    const option = empArr[i + 2];
    if (option === "*") {
      calcArr.push(calc * 2);
      calcArr.push("*");
      i += 2;
    } else if (option === "#") {
      calcArr.push(calc * -1);
      calcArr.push("#");
      i += 2;
    } else {
      calcArr.push(calc);
      i++;
    }
    console.log("calcArr", calcArr);
  }

  return answer;
}

const dartResult = "1D2S3T*";

console.log(solution(dartResult));
