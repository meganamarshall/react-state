import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders the colorpicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('changes to red on red click', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('color')).toEqual('red');
  });

  it('changes to green on green click', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state('color')).toEqual('green');
  });

  it('changes to blue on blue click', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.state('color')).toEqual('blue');
  });
  
  it('changes div class name to clicked color', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.setState({ color: 'blue' }, () => {
      expect(wrapper.find('div').at(0).hasClass('blue')).toBeTruthy();
    });
  });
});
