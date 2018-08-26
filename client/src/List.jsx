import React from 'react';
import propTypes from 'prop-types';
import { Fade, ListGroup, ListGroupItem } from 'reactstrap';

export default function List({ addresses, listVisible }) {
  const addressComps = addresses
    ? addresses.map(address => (
      <ListGroupItem key={address.formatted_address} className="full-width">{address.formatted_address}</ListGroupItem>))
    : null;
  return (
    <Fade in={listVisible} unmountOnExit tag="div">
      <ListGroup flush id="list" className="full-width">
        {addressComps}
      </ListGroup>
    </Fade>
  );
}

List.propTypes = {
  addresses: propTypes.arrayOf(propTypes.object),
  listVisible: propTypes.bool.isRequired,
};

List.defaultProps = {
  addresses: null,
};
