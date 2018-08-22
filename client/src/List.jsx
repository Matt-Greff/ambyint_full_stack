import React from 'react';
import propTypes from 'prop-types';
import { Fade, ListGroup, ListGroupItem } from 'reactstrap';

export default function list({ addresses, listVisible }) {
  const addressComps = addresses.map(address => (
    <ListGroupItem key={address} className="full-width">{address}</ListGroupItem>
  ));
  return (
    <Fade in={listVisible} unmountOnExit tag="div">
      <ListGroup id="list" className="full-width">
        {addressComps}
      </ListGroup>
    </Fade>
  );
}

list.propTypes = {
  addresses: propTypes.arrayOf(propTypes.string).isRequired,
  listVisible: propTypes.bool.isRequired,
};
