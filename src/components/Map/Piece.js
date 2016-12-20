import React from 'react';

export const Piece = ({type}) => (

  <div className={`piece piece-${type}`}>{(type == 'default')? '' : type}</div>
)

Piece.propTypes = {
  type : React.PropTypes.string
}

Piece.defaultProps = {
  type : 'default'
}

export default Piece
