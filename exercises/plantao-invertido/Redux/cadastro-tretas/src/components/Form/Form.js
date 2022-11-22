import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import './Form.css';

import { connect } from 'react-redux';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      preferencia: 'bolacha',
    };
  }

  render() {

    const { nome, preferencia } = this.state;
    const { updateTretas } = this.props;

    return (
      <div className="form">
        <Input
          label="Digite um nome"
          onChange={(e) => this.setState({ nome: e.target.value })}
        />
        <div className="options">
          <Radio
            label="Biscoito"
            id="biscoito"
            htmlFor="biscoito"
            value="biscoito"
            onChange={(e) => this.setState({ preferencia: e.target.value })}
          />
          <Radio
            label="Bolacha"
            id="bolacha"
            htmlFor="bolacha"
            value="bolacha"
            onChange={(e) => this.setState({ preferencia: e.target.value })}
          />
        </div>
        <Button
          label="Enviar a treta"
          onClick={() => updateTretas(nome, preferencia)}
        />

      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateTretas: (nome, preferencia) => dispatch({ type: 'ADD_TRETA', nome, preferencia }),
});

export default connect(null, mapDispatchToProps)(Form);
