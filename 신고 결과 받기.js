function solution(id_list, report, k) {
  let idList = {};
  for (let i = 0; i < id_list.length; i++){
    idList[id_list[i]] = 0;
  }
  for (let j = 0; j < report.length; j++){
    const splitReport = report[j].split(' ');
    const reporter = splitReport[0];
    const target = splitReport[1];
    if (idList[reporter] === 0){
      idList[target] += 1;
    }
  }
  return idList;
}