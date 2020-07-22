import React from 'react';
import {shallow} from 'enzyme';
import {ForecastWeatherList} from '.';

const forecastMock = [
  {
    day: 'Mon',
    icon: '01d',
    temp: '26º/12ºC',
  },
  {
    day: 'Tue',
    icon: '03d',
    temp: '27º/11ºC',
  },
  {
    day: 'Wed',
    icon: '02d',
    temp: '26º/14ºC',
  },
  {
    day: 'Thu',
    icon: '10d',
    temp: '23º/12ºC',
  },
  {
    day: 'Fri',
    icon: '10d',
    temp: '15º/9ºC',
  },
];

const setup = (propOverrides) => {
  const props = Object.assign(
    {
      day: 'Mon',
      icon: '10d',
      temp: '26º/12ºC',
    },
    propOverrides,
  );

  const wrapper = shallow(<ForecastWeatherList {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Testing CurrentWeather component', () => {
  it('renders as expected', () => {
    const {wrapper} = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
