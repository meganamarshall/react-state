import React from 'react';
import PropTypes from 'prop-types';
import styles from './LiftedColorPicker.css';

function ColorPicker({ selectColorHandler }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() => selectColorHandler('red')}>Red</button> 
      <button className={styles.green} onClick={() => selectColorHandler('green')}>Green</button> 
      <button className={styles.blue} onClick={selectColorHandler.bind(null, 'blue')}>Blue</button> 
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};

export default ColorPicker;
