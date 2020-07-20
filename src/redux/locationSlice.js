import {createSlice} from '@reduxjs/toolkit';
import {getLocation} from '../services/locationApi';

const initialState = {
  location: '',
  loading: false,
  error: false,
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
      state.location = action.payload;
      state.loading = false;
    },
    fetchLocationFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const {actions, reducer} = LocationSlice;

export const {
  fetchLocationStart,
  fetchLocationSuccess,
  fetchLocationFailure,
} = actions;

export const fetchLocation = () => async (dispatch) => {
  dispatch(fetchLocationStart());
  const location = await getLocation();
  dispatch(fetchLocationSuccess(location));
  try {
  } catch (error) {
    console.log(error);
    dispatch(fetchLocationFailure);
  }
};

export default reducer;
