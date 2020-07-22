import React from 'react';
import {shallow} from 'enzyme';
import {CurrentWeather} from '.';

const setup = (propOverrides) => {
  const props = Object.assign(
    {
      currentTemp: '10',
      city: 'Buenos Aires',
      weatherDescription: 'shower rain',
      icon: '10d',
    },
    propOverrides,
  );

  const wrapper = shallow(<CurrentWeather {...props} />);

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
  it('should show the correct temperature', () => {
    const {wrapper, props} = setup();
    expect(
      wrapper.find({testID: 'current-weather-temp'}).props(),
    ).toHaveProperty('children', props.currentTemp);
  });
});
