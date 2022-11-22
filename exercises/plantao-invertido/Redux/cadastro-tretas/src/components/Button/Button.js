import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { onClick, label, value } = this.props;
    return (
      <button
        className="button"
        type="button" value={ value }
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

export default Button;
