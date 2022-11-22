import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Pokédex</h1>
        <nav>
          <span><Link to="/">Home</Link></span>
          <span className='spanLink'><Link to="/about">About</Link></span>
          <span><Link to="/">Favorite Pokémons</Link></span>
        </nav>
      </header>
    )
  }
}

export default Header;