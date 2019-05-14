import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class Button extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    colorHandler: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className={styles[this.props.color]} onClick={() => this.props.colorHandler(this.props.color)}>{this.props.color}</button>
    );
  }
}
