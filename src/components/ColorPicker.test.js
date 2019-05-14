import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders the colorpicker', () => {
    const colors = ['red', 'green', 'blue'];
    const wrapper = shallow(<ColorPicker colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('changes div class name to clicked color', () => {
    const colors = ['red', 'green', 'blue'];
    const wrapper = shallow(<ColorPicker colors={colors} />);
    wrapper.setState({ color: 'blue' }, () => {
      expect(wrapper.find('div').at(0).hasClass('blue')).toBeTruthy();
    });
  });
});
