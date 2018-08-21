import React from 'react';
import propTypes from 'prop-types';
import { Button, Input } from 'reactstrap';

export default function menu({ switchView }) {
  return (
    <div className="full-width" id="menu">
      <Button className="full-width" id="toggle" onClick={() => switchView()}>List View</Button>
      <Input className="full-width" id="search-bar" />
    </div>
  );
}

menu.propTypes = {
  switchView: propTypes.func.isRequired,
};
