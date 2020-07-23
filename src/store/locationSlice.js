import {createSlice} from '@reduxjs/toolkit';
import {getLocation} from '../services/locationApi';
import translations from '../services/translations';

const initialState = {
  locationInfo: '',
  loading: false,
  error: false,
  selectedCity: null,
};

const LocationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    fetchLocationStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchLocationSuccess(state, action) {
      state.locationInfo = action.payload;
      state.loading = false;
    },
    fetchLocationFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setLocationCity(state, action) {
      state.selectedCity = action.payload;
    },
  },
});

const {actions, reducer} = LocationSlice;

export const {
  fetchLocationStart,
  fetchLocationSuccess,
  fetchLocationFailure,
  setLocationCity,
} = actions;

export const fetchLocation = () => async (dispatch) => {
  try {
    dispatch(fetchLocationStart());
    const location = await getLocation();
    const {city, latitude, longitude} = location;
    dispatch(fetchLocationSuccess({city, latitude, longitude}));
  } catch (error) {
    console.log(error);
    dispatch(
      fetchLocationFailure({
        key: 'getLocationError',
        msg: translations.requestError,
      }),
    );
  }
};

export default reducer;
