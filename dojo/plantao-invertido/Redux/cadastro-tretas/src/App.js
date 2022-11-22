import React from 'react';
import { Form, Table } from './components';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tretas: [],
    };
    this.updateTretas = this.updateTretas.bind(this);
  }
  updateTretas = (nome, preferencia) =>
    this.setState((state) => ({
      tretas: [...state.tretas, { nome, preferencia }],
    }));

  render() {
    const { tretas } = this.state;
    return (
      <div className="App">
        <Form tretas={tretas} updateTretas={this.updateTretas} />
        <Table />
      </div>
    );
  }
}

export default App;
