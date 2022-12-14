import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <li><Link to="/exercise-pokedex-router">Pokedex</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/favorites">Favorite Pokemons</Link></li>
        </nav>
      </header>
    )
    }
}

export default Header;