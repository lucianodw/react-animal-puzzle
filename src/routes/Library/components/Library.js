import React from 'react'
import Square from '../../../components/Map/Square';
import Piece from '../../../components/Map/Piece';
import Board from '../../../components/Map/Board';

import { DEFAULT_BOARD } from '../../../utils/constants.js'

export const Library = (props) => (
  <div className="row">

    <h4 className="col-xs-12">Board Squares</h4>
    <hr className="col-xs-12" />

    <div className="library-item col-xs-12 col-sm-3">
      <p>Default Square</p>
      <Square type={'default'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Block Square</p>
      <Square type={'block'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Highlight Square</p>
      <Square type={'highlight'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Upgrade Sloth</p>
      <Square type={'upgrade'} upgrade={'sloth'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Upgrade Frog</p>
      <Square type={'upgrade'} upgrade={'frog'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Upgrade Monkey</p>
      <Square type={'upgrade'} upgrade={'monkey'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Upgrade Horse</p>
      <Square type={'upgrade'} upgrade={'horse'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Winner Square</p>
      <Square type={'winner'} />
    </div>

    <h4 className="col-xs-12">Player Pieces</h4>
    <hr className="col-xs-12" />

    <div className="library-item col-xs-12 col-sm-3">
      <p>Empty Piece</p>
      <Piece type={'default'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Sloth Piece</p>
      <Piece type={'sloth'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Frog Piece</p>
      <Piece type={'frog'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Monkey Piece</p>
      <Piece type={'monkey'} />
    </div>

    <div className="library-item col-xs-12 col-sm-3">
      <p>Horse Piece</p>
      <Piece type={'horse'} />
    </div>

  </div>
)

export default Library
