function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}
const s = "1234";
console.log(solution(s));
