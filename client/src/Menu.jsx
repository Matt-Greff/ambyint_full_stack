import React from 'react';
import propTypes from 'prop-types';
import { Button, Input } from 'reactstrap';

export default function menu({
  switchView,
  searchBarTyping,
  query,
}) {
  return (
    <div className="full-width" id="menu">
      <Button value={query} className="full-width" id="toggle" onClick={() => switchView()}>Toggle List View</Button>
      <Input onChange={searchBarTyping} className="full-width" id="search-bar" />
    </div>
  );
}

menu.propTypes = {
  switchView: propTypes.func.isRequired,
  searchBarTyping: propTypes.func.isRequired,
  query: propTypes.string.isRequired,
};
