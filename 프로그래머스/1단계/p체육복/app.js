function solution(n, lost, reserve) {
  const real_lost = lost.filter((v) => !reserve.includes(v)).sort();
  const real_reserve = reserve.filter((v) => !lost.includes(v)).sort();

  for (let x of real_reserve) {
    if (real_lost.indexOf(x - 1) >= 0) {
      real_lost.splice(real_lost.indexOf(x - 1), 1);
    } else if (real_lost.indexOf(x + 1) >= 0) {
      real_lost.splice(real_lost.indexOf(x + 1), 1);
    }
  }
  return n - real_lost.length;
}
