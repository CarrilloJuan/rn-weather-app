import React from 'react';
import WeatherIcon from '.';
import {shallow} from 'enzyme';

it('renders correctly', () => {
  const wrapper = shallow(<WeatherIcon icon="03d" />);
  expect(wrapper).toMatchSnapshot();
});
