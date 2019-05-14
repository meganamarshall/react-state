import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('incrementer component', () => {
  it('renders the incrementer', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });
});


