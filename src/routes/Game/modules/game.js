// ------------------------------------
// Constants
// ------------------------------------
export const MOVE_PIECE = 'MOVE_PIECE'
export const UPGRADE_PIECE = 'UPGRADE_PIECE'
export const WIN_GAME = 'WIN_GAME'
export const LOSE_GAME = 'LOSE_GAME'
export const RESET_GAME = 'RESET_GAME'
import { DEFAULT_BOARD, ALLOWED_MOVES } from '../../../utils/constants.js'
import { calculateBoard } from '../../../utils/utils.js'

// ------------------------------------
// Actions
// ------------------------------------

export function movePiece (x = 0, y = 0, counter = 0) {
  return function(dispatch) {
    dispatch({
      type    : MOVE_PIECE,
      payload : {x,y,counter}
    })
  }
}

export function upgradePiece (newPiece) {
  return function(dispatch) {
    dispatch({
      type    : UPGRADE_PIECE,
      payload : newPiece
    })
  }
}

export function winGame () {
  return function(dispatch) {
    dispatch({
      type    : WIN_GAME
    })
  }
}

export function loseGame () {
  return function(dispatch) {
    dispatch({
      type    : LOSE_GAME
    })
  }
}

export function resetGame () {
  return function(dispatch) {
    dispatch({
      type    : RESET_GAME
    })
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch(increment(getState().counter))
//         resolve()
//       }, 200)
//     })
//   }
// }
//
export const actions = {
  movePiece,
  winGame
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MOVE_PIECE] : (state, action) => {
    let newBoard = calculateBoard(state.board, ALLOWED_MOVES[state.piece], action.payload.x, action.payload.y, state.piece);
    console.log('counter', action.payload.counter--)
    return {
      ...state,
      board: newBoard,
      positionX: action.payload.x,
      positionY: action.payload.y,
      counter: action.payload.counter--
    }
  },
  [UPGRADE_PIECE] : (state, action) => {
    let newBoard = calculateBoard(state.board, ALLOWED_MOVES[action.payload], state.positionX, state.positionY, action.payload);

    return {
      ...state,
      board: newBoard,
      piece: action.payload
    }
  },
  [WIN_GAME] : (state, action) => {
    return {
      ...state,
      isWinner: true,
      gameOver: true
    }
  },
  [LOSE_GAME] : (state, action) => {
    return {
      ...state,
      isWinner: false,
      gameOver: true
    }
  },
  [RESET_GAME] : (state, action) => {
    return {
      ...state,
      board: calculateBoard(DEFAULT_BOARD, ALLOWED_MOVES['sloth'], 0, 0, 'sloth'),
      piece: 'sloth',
      positionX: 0,
      positionY: 0,
      isWinner: false,
      gameOver: false,
      counter: 16
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function gameReducer (state = {
  board: calculateBoard(DEFAULT_BOARD, ALLOWED_MOVES['sloth'], 0, 0, 'sloth'),
  piece: 'sloth',
  positionX: 0,
  positionY: 0,
  isWinner: false,
  gameOver: false,
  counter: 16
}, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
