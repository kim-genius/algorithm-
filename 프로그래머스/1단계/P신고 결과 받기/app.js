function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0);
  const report_set = new Set(report);
  const report_recive = {};

  report_set.forEach((item) => {
    const recive = item.split(" ")[1];
    const send = item.split(" ")[0];

    if (report_recive[recive]) {
      const tmp = [...report_recive[recive]];
      tmp.push(send);
      report_recive[recive] = tmp;
    } else {
      report_recive[recive] = [send];
    }
  });

  id_list.forEach((item) => {
    if (report_recive[item] && report_recive[item].length >= k) {
      report_recive[item].map((reciveItem) => {
        answer[id_list.indexOf(reciveItem)] += 1;
      });
    }
  });

  return answer;
}

const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 1;

console.log(solution(id_list, report, k));
