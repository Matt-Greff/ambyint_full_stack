import React from 'react';
import propTypes from 'prop-types';

export default function menu({ apiCall }) {
  return (
    <div className="full-width" id="menu">
      <input className="full-width" id="toggle" type="submit" onClick={() => apiCall()} />
      <input className="full-width" id="search-bar" />
    </div>
  );
}

menu.propTypes = {
  apiCall: propTypes.func.isRequired,
};
