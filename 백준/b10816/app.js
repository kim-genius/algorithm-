const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr1 = input[1];
const arr2 = input[3];
const map = new Map();
const result = [];

for (let x of arr1.split(" ")) {
  if (map.has(x)) {
    map.set(x, map.get(x) + 1);
  } else {
    map.set(x, 1);
  }
}

for (let x of arr2.split(" ")) {
  if (map.has(x)) {
    result.push(map.get(x));
  } else {
    result.push(0);
  }
}
console.log(result.join(" "));
