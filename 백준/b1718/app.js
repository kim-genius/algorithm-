const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, key] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((v) => v.trim());

let result = "";
let k = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === " ") {
    result += " ";
    k++;
    continue;
  }

  let keyIndex = key[k % key.length].charCodeAt(0) - "a".charCodeAt(0) + 1;
  let charIndex = input[i].charCodeAt(0) - "a".charCodeAt(0);
  k++;
  let num = charIndex - keyIndex;

  if (num < 0) num += 26;

  result += String.fromCharCode(num + "a".charCodeAt(0));
}

console.log(result.trim());
