import React from 'react';
import propTypes from 'prop-types';

export default function button({ apiCall }) {
  return (
    <input type="submit" onClick={() => apiCall()} />

  );
}

button.propTypes = {
  apiCall: propTypes.func.isRequired,
};
