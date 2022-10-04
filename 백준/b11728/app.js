const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr1 = input[0].split(" ").map(Number);
const arr2 = input[1].split(" ").map(Number);

let pl = 0;
let pr = 0;

const answer = [];
while (pl < arr1.length && pr < arr2.length) {
  if (arr1[pl] > arr2[pr]) {
    answer.push(arr2[pr++]);
  } else {
    answer.push(arr1[pl++]);
  }
}
while (pl < arr1.length) {
  answer.push(arr1[pl++]);
}
while (pr < arr2.length) {
  answer.push(arr2[pr++]);
}
console.log(answer.join(" "));
