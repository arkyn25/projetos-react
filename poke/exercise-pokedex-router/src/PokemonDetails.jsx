import React from 'react';
import pokemons from './data';
import MountImage from './MountImage';
import Header from './Header';

class PokemonDetails extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: undefined,
      loading: true,
    }
    this.fetchsearchPokemon = this.fetchsearchPokemon.bind(this);    
  }
  
  componentDidMount() {
    this.fetchsearchPokemon();
  }

  fetchsearchPokemon() {
    let {id} = this.props.match.params;      
    id = parseInt(id, 10);
    const pokemonFound = pokemons.find(poke => poke.id === id);    
    this.setState({
      pokemon: pokemonFound,
      loading: false,
    })    
  }

  render() {
    const {pokemon, loading} = this.state;    
    if (loading) return 'Loading';    
    const {name, type, averageWeight, image, summary, foundAt} = pokemon;
    return (
      <div className='divMain'>
        <Header />        
        <h2>{name} Details</h2>

        <div className='divDetails'>
          <div className='div'>
            <p>{name}</p>
            <span>{type}</span>                   
            <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
          </div>

          <div className='div'>
            <img className='imgPokemon' src={image} alt={name}/>                 
          </div>                            
        </div> 
        <h2>Sumary</h2>                 
        <p>{summary}</p>
        <h2>Game Locations of {name}</h2>
        <MountImage name={name} foundAt={foundAt}/>
        <label htmlFor="Pokemon favoritado?">Pokemon favoritado?</label>
        <input type="checkbox"/>
      </div>
    )
  }
}

export default PokemonDetails;