import React from 'react';
import {shallow} from 'enzyme';
import Header from '.';

describe('Header Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
