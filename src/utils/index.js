import {format, fromUnixTime} from 'date-fns';

export const getDayFromUnixTime = (t) => {
  const date = fromUnixTime(t);
  return format(date, 'eeeeee');
};
