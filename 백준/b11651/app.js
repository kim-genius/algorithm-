const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

input.sort((a, b) => {
  if (a.split(" ")[1] !== b.split(" ")[1])
    return a.split(" ")[1] - b.split(" ")[1];
  return a.split(" ")[0] - b.split(" ")[0];
});

console.log(input.join("\n"));
