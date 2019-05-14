import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;
  
    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red} onClick={this.selectColor.bind(null, 'red')}>Red</button>
        <button className={styles.green} onClick={() => this.selectColor('green')}>Green</button>
        <button className={styles.blue} onClick={() => this.selectColor('blue')}>Blue</button>
        <div className={styles[color]}></div>
      </section>
    );
  }
}
