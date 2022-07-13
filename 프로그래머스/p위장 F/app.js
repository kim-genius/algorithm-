function solution(clothes) {
  const sh = new Map();

  for (let [val, key] of clothes) {
    if (!sh.has(key)) sh.set(key, [val]);
    else sh.set(key, [...sh.get(key), val]);
  }
  let cnt = 1;
  for (let i = 1; i <= sh.size; i++) {
    cnt *= i;
  }
  return sh.size === 1 ? clothes.length : clothes.length + cnt;
}

const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(clothes));
