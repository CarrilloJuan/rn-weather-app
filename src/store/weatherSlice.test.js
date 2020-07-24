import weatherReducer, {
  fetchWeatherStart,
  fetchWeatherSuccess,
} from './weatherSlice';

describe('Location reducer', () => {
  const initialState = {
    data: '',
    loading: false,
    error: false,
    success: false,
  };
  it('should handle initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle fetchWeatherStart', () => {
    expect(
      weatherReducer(initialState, {
        type: fetchWeatherStart.type,
      }),
    ).toEqual({
      data: '',
      loading: true,
      error: false,
      success: false,
    });
  });
  it('should handle fetchWeatherSuccess', () => {
    expect(
      weatherReducer(
        {
          data: '',
          loading: true,
          error: false,
          success: false,
        },
        {
          type: fetchWeatherSuccess.type,
          payload: {
            current: {temp: 10.57, description: 'broken ', icon: '04n'},
            forecast: [
              {id: 1595602800, day: 'Fr', temp: '8/10', icon: '04d'},
              {id: 1595689200, day: 'Sa', temp: '6/11', icon: '01d'},
              {id: 1595775600, day: 'Su', temp: '8/14', icon: '02d'},
              {id: 1595862000, day: 'Mo', temp: '9/13', icon: '04d'},
              {id: 1595948400, day: 'Tu', temp: '7/11', icon: '02d'},
            ],
          },
        },
      ),
    ).toEqual({
      data: {
        current: {temp: 10.57, description: 'broken ', icon: '04n'},
        forecast: [
          {id: 1595602800, day: 'Fr', temp: '8/10', icon: '04d'},
          {id: 1595689200, day: 'Sa', temp: '6/11', icon: '01d'},
          {id: 1595775600, day: 'Su', temp: '8/14', icon: '02d'},
          {id: 1595862000, day: 'Mo', temp: '9/13', icon: '04d'},
          {id: 1595948400, day: 'Tu', temp: '7/11', icon: '02d'},
        ],
      },
      loading: false,
      error: false,
      success: true,
    });
  });
});
