import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('incrementer component', () => {
  it('renders the incrementer', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('increments the count', () => {
    const wrapper = shallow(<Incrementer />);

    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('count')).toEqual(1);
  });
});


