var board = 
    [[5, 4, 3, 2, 1],
    [],
    []];

var printBoard = function() {
  var curBoard = board.map( function(peg) {
    if (peg.length === 0){
      return '--- ';
    }  
    else {
      return '--- ' + peg.join(' ');
    }
  });
  
  curBoard.forEach( function(peg) {
    console.log(peg);
  });

  return '';
};

//console.log(printBoard());

var moveDisc = function(originalPeg, movePeg) {
  var originPeg = board[originalPeg-1];
  var moveToPeg = board[movePeg-1];


  if (moveToPeg.length === 0  || moveToPeg[length-1] > originPeg[length-1]) {
    moveToPeg.push(originPeg.pop());
    console.log('That move was successful, board is now:');
    printBoard();
  }
  else {
    console.log('This is an invalid move, board is now:');
    printBoard();
  }

  return '';
};


