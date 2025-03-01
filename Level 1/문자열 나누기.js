function solution (s) {
  const sArray = s.split('');
  let firstWord = sArray[0];
  let sameCount = 0;
  let diffCount = 0;
  let answer = 0;
  while (sArray.length > 0) {
    const word = sArray.shift();
    if (word === firstWord) {
      sameCount ++;
    } else {
      diffCount ++;
    }
    if (sameCount === diffCount) {
      answer ++;
      firstWord = sArray[0];
      sameCount = 0;
      diffCount = 0;
    }
    if (Math.abs(sameCount - diffCount) > sArray.length) {
      return answer + 1;
    }
  }
  return answer;
}