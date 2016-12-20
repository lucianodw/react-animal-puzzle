export const calculateBoard = (board, allowedMoves, currentX, currentY, piece) => {
  let newBoard = board;
  let moves = Object.assign(allowedMoves);

  let rows = newBoard.length;
  let cols = newBoard[0].length;

  let isDynamic = piece === 'horse' || piece === 'monkey';

  // --- Clear Board of Highlights ---
  newBoard = _.map(newBoard, (row, index)=> {
    row = _.map(row, (square) => {
      let type = (square.type == 'highlight') ? 'default' : square.type;

      return {
        ...square,
        type,
        isValidMove : false
      }
    });

    return row;
  })

  if(isDynamic) {
    let multipliers = Object.assign(moves);

    _.each(multipliers, (offset, index) => {
      for(let i = 0; i < rows; i++) {
        let multiplierY = i*offset[0];
        let multiplierX = i*offset[1];
        let newCoordinateY = offset[0] + multiplierY;
        let newCoordinateX = offset[1] + multiplierX;

        // -- STOP CREATING IF BLOCK IS REACHED --
        let moveY = newCoordinateY + currentY;
        let moveX = newCoordinateX + currentX;

        if(newBoard[moveY] && newBoard[moveY][moveX] && newBoard[moveY][moveX].type == 'block') {
          break;
        }

        moves = [
          ...moves,
          [newCoordinateY, newCoordinateX]
        ];
      }
    });
  }


  _.each(moves, (offset) => {
      let moveY = offset[0] + currentY;
      let moveX = offset[1] + currentX;
      let isInMininumBounds = moveX > -1 && moveY > -1;
      let isInMaximumBounds = moveX < cols && moveY < rows;

      if(isInMininumBounds & isInMaximumBounds) {
        let type = newBoard[moveY][moveX].type;
        newBoard[moveY][moveX].type = (type === 'default') ? 'highlight' : type;
        newBoard[moveY][moveX].isValidMove = (type !== 'block');
      }
  });

  return newBoard;
};
