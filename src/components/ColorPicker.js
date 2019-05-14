import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {

  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red}>Red</button>
      <button className={styles.green}>Green</button>
      <button className={styles.blue}>Blue</button>
    </section>
  );
}
