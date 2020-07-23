import React from 'react';
import {shallow} from 'enzyme';
import {useSelector} from 'react-redux';
import CurrentWeather from '.';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Component CurrentWeather', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('renders as expected', () => {
    const mockState = {
      location: {
        locationInfo: {city: 'Buenos Aires'},
      },
      weather: {
        data: {
          current: {
            temp: '10',
            description: 'shower rain',
            icon: '10d',
          },
        },
      },
    };
    useSelector.mockImplementation((selector) => selector(mockState));
    const wrapper = shallow(<CurrentWeather />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show the selected city', () => {
    const mockState = {
      location: {
        selectedCity: 'Tokyo',
        locationInfo: {city: 'Buenos Aires'},
      },
      weather: {
        data: {
          current: {
            temp: '10',
            description: 'shower rain',
            icon: '10d',
          },
        },
      },
    };
    useSelector.mockImplementation((selector) => selector(mockState));
    const wrapper = shallow(<CurrentWeather />);
    expect(wrapper.find({testID: 'weather-city'}).props()).toHaveProperty(
      'children',
      mockState.location.selectedCity,
    );
  });
});
