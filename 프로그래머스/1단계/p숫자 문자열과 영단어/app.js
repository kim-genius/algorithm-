function solution(s) {
  var answer = s;
  const alphabet = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  alphabet.map((alpha, index) => {
    while (answer.includes(alpha)) {
      answer = answer.replace(alpha, index);
    }
  });

  return Number(answer);
}

const s = "onetwothreefourfivesixzeroseveneightnine";
console.log(solution(s));
