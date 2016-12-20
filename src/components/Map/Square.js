import React from 'react';
import Piece from './Piece';

export const Square = ({type, piece, upgrade}) => (
  <div className={`square square-${type} ${upgrade}`}>
    <Piece type={piece} />
    {type == 'upgrade' && piece !== upgrade && <span>{upgrade}</span>}
  </div>
)

Square.propTypes = {
  type : React.PropTypes.string.isRequired,
  isValidMove: React.PropTypes.bool,
  upgrade : React.PropTypes.string, //Optional,
  piece : React.PropTypes.string //Optional
}

export default Square
