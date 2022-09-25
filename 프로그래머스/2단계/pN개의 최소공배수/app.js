function solution(arr) {
  var answer = Math.max(...arr);

  let i = 1;
  while (true) {
    let flag = false;
    for (let x of arr) {
      if ((answer * i) % x !== 0) {
        flag = true;
        break;
      }
    }
    if (!flag) break;
    i++;
  }
  return answer * i;
}
console.log(solution([3, 6, 8, 14]));
