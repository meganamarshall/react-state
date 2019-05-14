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
    const color = this.state;
  
    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red}>Red</button>
        <button className={styles.green}>Green</button>
        <button className={styles.blue}>Blue</button>
      </section>
    );
  }
}
