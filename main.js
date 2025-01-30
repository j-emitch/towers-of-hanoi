// var newTower = function() {
//   this.
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


