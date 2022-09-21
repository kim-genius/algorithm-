function solution(s) {
  let tmp = s;
  let cnt = 0;
  let delCnt = 0;
  while (tmp != 1) {
    let len = tmp.length;
    tmp = tmp.replace(/[0]/g, "");
    delCnt += len - tmp.length;
    tmp = tmp.length.toString(2);
    cnt++;
  }
  return [cnt, delCnt];
}

console.log(solution("110010101001"));
