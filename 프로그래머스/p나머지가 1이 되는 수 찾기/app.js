function solution(n) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      min = Math.min(min, i);
      break;
    }
  }
  return min;
}

console.log(solution(667));
