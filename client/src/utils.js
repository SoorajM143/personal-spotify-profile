// Get the query params off the window's URL
import querystring from 'query-string';

export const getHashParams = () => {
  let parsed = querystring.parse(window.location.search);

  return parsed;
};

export const catchErrors = (fn) => {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.error(err);
    });
  };
};
