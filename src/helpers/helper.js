import { debounce, throttle } from 'lodash';

const debounceAndThrottle = (event, delay = 200) => {
  return throttle(debounce(event, delay), delay);
};

export { debounceAndThrottle };
