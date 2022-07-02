function solution(n, arr1, arr2) {
  const map1 = arr1.map((arr) => arr.toString(2).padStart(n, "0"));
  const map2 = arr2.map((arr) => arr.toString(2).padStart(n, "0"));

  const resultMap = [];

  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === "1" || map2[i][j] === "1") {
        temp += "#";
      } else {
        temp += " ";
      }
    }
    resultMap.push(temp);
  }

  return resultMap;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));
