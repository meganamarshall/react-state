import React, { PureComponent } from 'react';

export default class Incrementer extends PureComponent {
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <p>Current Count: {count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </>
    );
  }
}

