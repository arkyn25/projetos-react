import React, { Component } from 'react';
import PropTypes from 'prop-types'

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' });
    callback(value);
  }

  render() {
    const { addTodo, disabled, removeTask } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input
          id="btnAdd" 
          type="button" 
          value="Adicionar" 
          onClick={() => this.addItem(textTodo,addTodo)} />
        <button
          onClick={removeTask}
          disabled={disabled}
          data-testid="id-remove"
          value="Remover">Remover
        </button>
      </div>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
