const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [text, key] = fs.readFileSync(filePath).toString().split("\n");

while (key.length < text.length) {
  key += key;
}

let arr = [];

for (let t = 0; t < text.length; t++) {
  let al = text.charCodeAt(t);
  let keyAl = key.charCodeAt(t) - 96;
  if (text[t] === " ") {
    arr.push(" ");
  } else {
    let encrypt = al - keyAl;
    if (encrypt < "a".charCodeAt(0)) {
      encrypt += 26;
    }

    arr.push(String.fromCharCode(encrypt));
  }
}

console.log(arr.join(""));
