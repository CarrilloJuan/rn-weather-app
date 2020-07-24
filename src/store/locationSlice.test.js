import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import translations from '../services/translations';

import locationReducer, {
  fetchLocationStart,
  fetchLocationSuccess,
  fetchLocationFailure,
  setLocationCity,
  fetchLocation,
} from './locationSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('Location reducer', () => {
  const initialState = {
    locationInfo: '',
    loading: false,
    error: false,
    selectedCity: '',
  };
  it('should handle initial state', () => {
    expect(locationReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle fetchLocationStart', () => {
    expect(
      locationReducer(initialState, {
        type: fetchLocationStart.type,
      }),
    ).toEqual({
      locationInfo: '',
      loading: true,
      error: false,
      selectedCity: '',
    });
  });
  it('should handle fetchLocationSuccess', () => {
    expect(
      locationReducer(
        {
          locationInfo: '',
          loading: true,
          error: false,
          selectedCity: '',
        },
        {
          type: fetchLocationSuccess.type,
          payload: {
            city: 'Buenos Aires',
            latitude: -34.6021,
            longitude: -58.3845,
          },
        },
      ),
    ).toEqual({
      locationInfo: {
        city: 'Buenos Aires',
        latitude: -34.6021,
        longitude: -58.3845,
      },
      loading: false,
      error: false,
      selectedCity: '',
    });
  });
  it('should handle setLocationCity', () => {
    expect(
      locationReducer(
        {
          locationInfo: {
            city: 'Buenos Aires',
            latitude: -34.6021,
            longitude: -58.3845,
          },
          loading: false,
          error: false,
          selectedCity: '',
        },
        {
          type: setLocationCity.type,
          payload: 'selectedCity',
        },
      ),
    ).toEqual({
      locationInfo: {
        city: 'Buenos Aires',
        latitude: -34.6021,
        longitude: -58.3845,
      },
      loading: false,
      error: false,
      selectedCity: 'selectedCity',
    });
  });
});

describe('async fetchLocation action', () => {
  it('fetches successfully data from API', () => {
    const data = {
      data: {
        city: 'Buenos Aires',
        latitude: -34.6021,
        longitude: -58.3845,
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    const expectedActions = [
      {type: fetchLocationStart.type, payload: undefined},
      {
        type: fetchLocationSuccess.type,
        payload: {
          city: 'Buenos Aires',
          latitude: -34.6021,
          longitude: -58.3845,
        },
      },
    ];
    const store = mockStore({});
    return store.dispatch(fetchLocation()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fetches erroneously data from an API', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('Network Error')),
    );

    const expectedActions = [
      {type: fetchLocationStart.type, payload: undefined},
      {
        type: fetchLocationFailure.type,
        payload: {
          key: 'getLocationError',
          msg: translations.requestError,
        },
      },
    ];
    const store = mockStore({});
    return store.dispatch(fetchLocation()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
