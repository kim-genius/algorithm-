const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const t = Number(input[0]);

for (let i = 1; i < t + 1; i++) {
  const floor = Number(input[2 * i - 1]);
  const room = Number(input[2 * i]);

  const apartment = [];

  for (let i = 0; i <= 14; i++) {
    const temp = [];
    for (let k = 1; k <= 14; k++) {
      temp.push(0);
    }
    apartment.push(temp);
  }

  for (let i = 1; i <= room; i++) {
    apartment[0][i] = i;
  }

  for (let f = 1; f <= floor; f++) {
    for (let r = 1; r <= room; r++) {
      apartment[f][r] = apartment[f - 1][r] + apartment[f][r - 1];
    }
  }

  console.log(apartment[floor][room]);
}

// 1 6 21 56
// 1 5 15 35
// 1 4 10 20
// 1 3 6 10
// 1 2 3 4
