const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let trans = input.replace(/XXXX/g, "AAAA");
trans = trans.replace(/XX/g, "BB");

if (trans.includes("X")) {
  console.log(-1);
} else {
  console.log(trans);
}
