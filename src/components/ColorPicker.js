import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;
  
    return (
      <section className={styles.ColorPicker}>
        {this.props.colors.map((color, i) => {
          return <Button key={i} color={color} colorHandler={this.selectColor}/>;
        })}
        <div className={styles[color]}></div>
      </section>
    );
  }
}
