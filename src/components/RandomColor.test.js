import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('randomcolor component', () => {
  it('renders the random color', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
