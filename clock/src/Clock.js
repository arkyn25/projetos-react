import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
      time: new Date(),
    });
  }


  render() {
    return (
      <div  className="clock">
        <h1> Hello World!</h1>
        <h2> Date is {this.state.date.toLocaleDateString()}.</h2>
        <h2> Time is {this.state.time.toLocaleTimeString()}.</h2>
      </div>
    )
  }
 
}
ReactDOM.render(
  <Clock />, 
  document.getElementById('root')
)

export default Clock;
