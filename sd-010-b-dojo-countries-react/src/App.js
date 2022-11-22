import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    };
    this.fetchCountries = this.fetchCountries.bind(this);
  }

  componentDidMount() {
    this.fetchCountries()
  }

  async fetchCountries() {
    const countries = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await countries.json();
    this.setState({countries: data})
  }

  render() {
    const { countries } = this.state;
    return (
      <main>
        <h1>Lista de países</h1>
        {
          countries.map((country) =>
           <div>
             <span>{country.translations.br}</span>
             <img width="20px" alt={country.name} src={country.flag}></img>
           </div>
        )}
      </main>
    )
  }
}

export default App;
