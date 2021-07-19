function solution(left, right) {
  let check = 0;
  let sum = 0;
    for(let i = left; i <= right; i++){
      for(let j = 1; j <= i; j++){
        if (i % j === 0){
          check++;    
        }
      }
      if (check % 2 === 0){
          sum = sum + i;
      }else{
          sum = sum - i;
      }
      check = 0;
    }
  return sum;      
  }