import React from 'react';
import pokemons from './data';

class PokemonDetails extends React.Component{
  

  render() {
    const { id, onChange, checked } = this.props.match.params;
    const pokemon = pokemons.find(poke => poke.id.toString() === id);
    const { image, name, type, averageWeight: { value, measurementUnit }, summary, foundAt } = pokemon;
    return(
      <div>
        <img src={image} alt={name}/>      
        <p> Name: {name}</p>
        <p> Type: {type}</p>
        <p> Average Weight: {value} {measurementUnit} </p>
        <p>{summary}</p>
        {foundAt.map(({ location, map }) => (
          <div key={map}>
            <p>{location}</p>
            <img src={map} alt={location}/>
          </div>
        ))}
        <label htmlFor="favorite">
          Favorite
          <input type="checkbox" name={id} onChange={onChange} checked={checked} id="favorite" />
        </label>
      </div>
    )
  }
}

export default PokemonDetails;