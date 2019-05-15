import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date(),
    img: ''
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
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.color === this.state.color) {
      this.setState({ img: 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg' });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    const { color, img } = this.state;
    const styles = {
      background: img ? `center / contain url(${img})` : color,
      width: '100px',
      height: '100px',
      border: '1px solid black'
    };
    return <div style={styles}></div>;
  }
}
