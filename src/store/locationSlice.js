import {createSlice} from '@reduxjs/toolkit';
import {getLocation} from '../services/locationApi';

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
  dispatch(fetchLocationStart());
  const location = await getLocation();
  const {city, latitude, longitude} = location;
  dispatch(fetchLocationSuccess({city, latitude, longitude}));
  try {
  } catch (error) {
    console.log(error);
    dispatch(fetchLocationFailure);
  }
};

export default reducer;
