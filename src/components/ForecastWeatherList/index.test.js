/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import {useSelector} from 'react-redux';
import ForecastWeatherList from './';

const mockState = {
  weather: {
    data: {
      forecast: [
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
      ],
    },
  },
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  shallowEqual: jest.fn(),
}));

describe('Forecast weather component', () => {
  // Remove warnings when rendering react-native components
  const origConsole = console.error;
  beforeEach(() => {
    console.error = () => {};
  });

  afterEach(() => {
    console.error = origConsole;
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('renders as expected', () => {
    useSelector.mockImplementation((selector) => selector(mockState));
    const wrapper = shallow(<ForecastWeatherList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render five items', () => {
    useSelector.mockImplementation((selector) => selector(mockState));
    const wrapper = mount(<ForecastWeatherList />);

    expect(wrapper.find({testID: 'forecast-item'})).toHaveLength(5);
  });
});
