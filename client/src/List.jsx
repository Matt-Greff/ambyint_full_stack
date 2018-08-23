import React from 'react';
import propTypes from 'prop-types';
import { Fade, ListGroup, ListGroupItem } from 'reactstrap';

export default function List({ addresses, listVisible }) {
  const addressComps = addresses.map(address => (
    <ListGroupItem key={address.formatted_address} className="full-width">{address.formatted_address}</ListGroupItem>
  ));
  return (
    <Fade in={listVisible} unmountOnExit tag="div">
      <ListGroup id="list" className="full-width">
        {addressComps}
      </ListGroup>
    </Fade>
  );
}

List.propTypes = {
  addresses: propTypes.arrayOf(propTypes.object).isRequired,
  listVisible: propTypes.bool.isRequired,
};
