import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      disabled: true,
    };

    this.addTodo = this.addTodo.bind(this);
    this.onClickTodo = this.onClickTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  onClickTodo(e) {
    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected');
      e.target.classList.remove('select_color');
    } else {
      this.setState({ disabled: false });
      e.target.classList.add('selected');
      e.target.classList.add('select_color');
    }
  }

  removeTodo() {
    const taskSelected = document.querySelectorAll('.selected');
    taskSelected.forEach((task) => {
      task.remove();
      this.setState({ disabled: true });
    });
  }

  render() {
    const { listTodo, disabled } = this.state;
    return (
      <div className="App">
        <InputTodo
          addTodo={(todo) => this.addTodo(todo)}
          disabled={disabled}
          removeTask={this.removeTodo}
        />
        {listTodo && (
          <ul>
          {listTodo.map((todo, index) => (
              <div className="selected"
                  onClick={this.onClickTodo} key={index + 1}>
                <Item content={todo} />
              </div>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default App;
