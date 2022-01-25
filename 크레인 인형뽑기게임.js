function solution(board, moves) {
  const answer = [];
  let count = 0;
  for(let i=0 ; i < moves.length ; i++){
    for(let row=0 ; row < board.length ; row++){
      const col = moves[i]-1;
      if(board[row][col] > 0){
        if(answer[answer.length - 1] === board[row][col]){
          answer.pop();
          count += 2;
        }else{
          answer.push(board[row][col]);
        }
        board[row][col] = 0;
        break;
      }
    }
  }
  return count;
}