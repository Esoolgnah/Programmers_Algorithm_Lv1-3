function solution(participant, completion) {
    let list = {};
    return String(participant.filter(function(el){
      list.el = list.el + 1;
      if (list.el === 2){
          return el;
      }
      if (completion.indexOf(el) < 0){
          
          return el;
      }
    
    }));
    }