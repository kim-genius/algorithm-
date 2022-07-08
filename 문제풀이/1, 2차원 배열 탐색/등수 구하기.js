function solution(arr) {
  const rank = [...Array(arr.length)].fill(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        rank[j]++;
      }
    }
  }

  return rank;
}

let arr = [87, 92, 92, 100, 76];
console.log(solution(arr));
