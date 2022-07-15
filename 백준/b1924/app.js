const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const date = new Date(`2007-${input[0].toString().padStart(2, 0)}-${input[1]}`);
console.log(days[new Date(date).getDay()]);
