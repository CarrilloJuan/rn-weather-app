import React from 'react';
import {shallow} from 'enzyme';
import ForecastWeatherItem from '.';

const setup = (propOverrides) => {
  const props = Object.assign(
    {
      day: 'Mon',
      icon: '10d',
      temp: '26º/12ºC',
    },
    propOverrides,
  );

  const wrapper = shallow(<ForecastWeatherItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CurrentWeather component', () => {
  it('renders as expected', () => {
    const {wrapper} = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
