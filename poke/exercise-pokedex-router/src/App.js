import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './About';
import './App.css';
import pokemons from './data';
import NotFound from './NotFound';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>        
        <Route path="/pokemon/:id" render={(props) => <PokemonDetails {...props} />} />
        <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons}/>} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;