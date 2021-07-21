function solution(n) {
    let check = 2;
    let count = 0;
      for (let i = 2; i < n; i++){
        for (let ii = 1; ii < i; ii++ ){
          while(check < ii){
            if (check % ii === 0){
                check = 2;
                break;
            }
            check++;
          }
          if (ii === check){
            count++;
          }
          check = 2;
        }
      }
    return count;
    }