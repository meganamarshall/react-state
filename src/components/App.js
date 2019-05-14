import React, { PureComponent } from 'react';
import ColorPicker from './LiftedColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: ''
  }

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <>
        <ColorPicker selectColorHandler={this.selectColor} />
        <ColorDisplay color={color} />
      </>
    );
  }
}
