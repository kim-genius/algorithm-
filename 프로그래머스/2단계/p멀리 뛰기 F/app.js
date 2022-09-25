function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[0] = 1;
  dy[1] = 1;

  for (let i = 2; i < dy.length; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  return dy[n] % 1234567;
}

console.log(solution(4));
