const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let t = +input[0];
let i = 1;

while (t--) {
  let n = +input[i++];
  let hMap = {};
  let sum = 1;

  while (n--) {
    const [name, kind] = input[i].split(" ");

    hMap[kind] = [...(hMap[kind] || []), name];

    i++;
  }

  Object.entries(hMap).forEach(([k, v]) => {
    sum *= v.length + 1;
  });
  console.log(sum - 1);
}
