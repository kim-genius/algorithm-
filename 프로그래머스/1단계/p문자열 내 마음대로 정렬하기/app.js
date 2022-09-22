function solution(strings, n) {
  const arr = strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    }
    if (a[n] < b[n]) {
      return -1;
    }
    if (a < b) return -1;
  });

  return arr;
}
