import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import Favorites from './Favorites';
import About from './About';
import Header from './Header';
import NotFound from './NotFound';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    };

  }
    
  render() {
    const { favorites } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Pokedex</h1>
          <Header />
          <Switch>
          <Route 
          path="/pokemon/:id" render={(props) => <PokemonDetails {...props} onChange={this.favorite} checked={favorites.includes(props.match.params.id)}/>}/>
          <Route path="/about" component={About} />
          <Route path="/favorites" render={() => <Favorites  favorites={favorites} pokemons={pokemons}/> }/>
          <Route exact path="/exercise-pokedex-router" render={ () => <Pokedex  favorites={favorites} pokemons={pokemons}/>  } 
          />
          <Route path="" component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;