import React from 'react';
import _ from 'lodash';

import Square from './Square';


export const Board = (props) => {
  let row = [];
  let { board, positionX, positionY, piece } = props.configuration;

  const gameboard = _.map(board, (rowData, rowIndex) => {

      row[rowIndex] = _.map(rowData, (square, colIndex) => {
        let { type, upgrade } = square;
        let gamepiece = 'default';

        if(colIndex == positionX && rowIndex == positionY) {
            gamepiece = piece;
        }

        return (
          <span key={colIndex} onClick={() => props.move(colIndex, rowIndex, square)}>
            <Square type={type} piece={gamepiece} upgrade={upgrade}  />
          </span>
        )
      });

      return <div className="row"  key={rowIndex} >{row[rowIndex]}</div>
  });

  return <div className="board col-xs-12">{gameboard}</div>
}

Board.propTypes = {
  configuration : React.PropTypes.object.isRequired
}

export default Board
