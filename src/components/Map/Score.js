import React from 'react';

export const Score = ({counter}) => {
  if(counter == 0) {
    return <p> 0 Moves Left! You Lose! </p>
  }

  return (
    <div className={`score`}>
      <p>You have <strong>{counter}</strong> moves left.</p>
    </div>
  )

}

Score.propTypes = {
  counter : React.PropTypes.number.isRequired
}

export default Score
