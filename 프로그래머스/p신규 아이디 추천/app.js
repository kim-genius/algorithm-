function solution(new_id) {
  var answer = "";
  var lowerPattern = /[a-z]/;
  var numPattern = /[0-9]/;
  for (id of new_id) {
    let word = "";
    word = id.toLowerCase();

    if (
      !lowerPattern.test(word) &&
      !numPattern.test(word) &&
      word !== "-" &&
      word !== "_" &&
      word !== "."
    ) {
      continue;
    }
    answer += word;
  }
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  if (answer[0] === ".") {
    answer = answer.slice(1, answer.length);
  }
  if (answer[answer.length - 1] === ".") {
    answer = answer.slice(0, answer.length - 1);
  }
  if (answer === "") {
    answer = "a";
  }
  if (answer.length > 15) {
    answer = answer.slice(0, 15);
    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, answer.length - 1);
    }
  }
  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }

  return answer;
}

const new_id = "...!@BaT#*..y.abcdefghijklm..";

console.log(solution(new_id));
