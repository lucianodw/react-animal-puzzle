import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Animal Puzzles</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='library' activeClassName='route--active'>
      Game Library
    </Link>
    {' · '}
    <Link to='game' activeClassName='route--active'>
      Start Game
    </Link>
  </div>
)

export default Header
