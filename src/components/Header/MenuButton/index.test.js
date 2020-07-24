/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import MenuButton from '.';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      toggleDrawer: mockedNavigate,
    }),
  };
});

describe('MenuButton Component', () => {
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
    const wrapper = shallow(<MenuButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call the toggleDrawer method', () => {
    const wrapper = mount(<MenuButton />);
    wrapper.find({testID: 'menu-button'}).at(0).props().onPress();
    expect(mockedNavigate.mock.calls.length).toBe(1);
  });
});
