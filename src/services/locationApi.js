import axios from 'axios';
import config from '../config';

export const getLocation = async () => {
  const {data} = await axios.get(config.locationUrl);
  return data;
};
