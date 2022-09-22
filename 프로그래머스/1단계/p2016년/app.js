function solution(a, b) {
  let date = new Date(new Date().setFullYear(2016, a - 1, b));
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return days[date.getDay()];
}
