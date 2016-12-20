import React, { Component } from 'react';
import Board from '../../../components/Map/Board';
import Score from '../../../components/Map/Score';


class Game extends Component {
	constructor(props) {
		super(props)
		this.state = {};

		this.move = this.move.bind(this);
		this.reset = this.reset.bind(this);
	}

  move(x,y,square) {
    console.log('square', square);
		let { counter } = this.props.game;

		if(square.isValidMove) {
        this.props.movePiece(x,y,counter);

				if(counter === 1) {
					this.props.loseGame();
				}

        if(square.type === 'upgrade') {
          this.props.upgradePiece(square.upgrade);
        }

        if(square.type === 'winner') {
          this.props.winGame();
        }
    }

  }

	reset(event) {
		event.preventDefault();
		this.props.resetGame();
	}

  render() {
    let { game } = this.props;

    if(game.gameOver && game.isWinner) {
      return <h2>YOU WIN THE GAME! <a href onClick={this.reset}>Try Again</a></h2>
    }

    if(game.gameOver & !game.isWinner) {
      return <h2>YOU LOST THE GAME! TRY HARDER NEXT TIME! <a href onClick={this.reset}>Try Again</a></h2>
    }

    return (
      <div className="row">
        <h4>Default Game</h4>
				<Score counter={game.counter} />
        <Board configuration={game} move={this.move} />
      </div>
    )
  }
}


export default Game
