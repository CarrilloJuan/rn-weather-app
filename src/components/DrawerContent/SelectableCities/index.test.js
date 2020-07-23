/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import {useDispatch} from 'react-redux';
import SelectableCities from '.';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Drawer Component', () => {
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
    const wrapper = shallow(<SelectableCities />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the dispatch when onPress', () => {
    const citiesMock = [{cityName: 'City', id: '3646738'}];
    const wrapper = mount(<SelectableCities cities={citiesMock} />);
    const mockedDispatch = jest.fn();
    useDispatch().mockReturnValue(mockedDispatch);
    wrapper.find({testID: 'city-item'}).at(0).props().onPress();
    expect(mockDispatch.mock.calls.length).toBe(1);
  });
});
