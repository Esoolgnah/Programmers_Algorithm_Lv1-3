function solution(arr){
    let sum = [];
    let count = 0;
    let result = arr.reduce(function (a,b){
    if (count === 0){
        if (a !== b){
        sum.push(b);
        count = 1;
        return b;
    
      }
    }else if (count === 1){
        if (a !== b){
          return b;
        }
        else{
          count = 0;
          return b;
        }
    }
    })
    return sum;
    }
    // 문제