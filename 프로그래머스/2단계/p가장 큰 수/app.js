function solution(numbers) {
  var answer = "";
  console.log(
    numbers.sort((a, b) => String(a).padEnd(4, 0) - String(b).padEnd(4, 0))
  );
  return numbers.sort().reverse().join("");
}

console.log(solution([3, 30, 34, 5, 9]));
