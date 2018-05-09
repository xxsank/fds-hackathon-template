class TicTacToe {
  //상태?
  // - 게임판
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  // - 현재 플레이어
  player = 'X';
  
  //동작?
  // - 턴
  turn({row,col}){
    // 현재 플레이어에 대한 표시를 게임판의 해당 위치에 넣어주고
    this.board[row][col] = this.player;
    // 현재 플레이어를 변경
    this.player = this.player === 'X' ? 'O' : 'X';
  }
  // - 누가 이겼는지 판별
  checkWinner(){
    for(let i = 0; i< 3; i++){
      if(
         this.board[i][0] != null &&
         this.board[i][0] === this.board[i][1] && 
         this.board[i][1] === this.board[i][2]
      ){
        return this.board[i][0];
      }
    }
  }
}

const game = new TicTacToe();

const rowEls = document.querySelectorAll('.board__row');
rowEls.forEach((rowEl, rowIndex) => {
 const colEls = rowEl.querySelectorAll('.board__col');
 colEls.forEach((colEl, colIndex) => {
   colEl.addEventListener('click', e =>{
     game.turn({row: rowIndex, col: colIndex});
     draw();
    })
 })
})

function draw(){
  game.board.forEach((rowArr, rowIndex) => {
    const rowEl = rowEls[rowIndex];
    const colEls = rowEl.querySelectorAll('.board__col');
    rowArr.forEach((col,colIndex) => {
      colEls[colIndex].textContent = col;
    })
  })
  const winner = game.checkWinner();
  if(winner){
    document.querySelector('.winner').textContent = winner;
  }
}





