import React, { PureComponent } from 'react';

//random color is a class that extends pure component

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date()
  }

  randomColor = () => {
    const myColors = ['red', 'blue', 'blueviolet', 'yellow', 'yellowgreen', 'coral', 'crimson', 'cornflowerblue'];
    const i = Math.floor(Math.random() * myColors.length);

    return myColors[i];
  }
  
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomColor(), trigger: new Date() });
    }, 1500);
  }
  //component did update - pass prevProps and prevState - this is where you'd set the meme if the prev state is equal to new state
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    const { color } = this.state;
    const styles = {
      background: color,
      width: '100px',
      height: '100px',
      border: '1px solid black'
    };
    return <div style={styles}></div>;
  }
}
