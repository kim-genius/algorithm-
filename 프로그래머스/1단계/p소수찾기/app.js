function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(10));
