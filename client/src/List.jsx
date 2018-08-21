import React from 'react';
import propTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function list({ addresses }) {
  const addressComps = addresses.map(address => (
    <ListGroupItem key={address} className="full-width">{address}</ListGroupItem>
  ));
  return (
    <ListGroup id="list" className="full-width">
      {addressComps}
    </ListGroup>
  );
}

list.propTypes = {
  addresses: propTypes.arrayOf(propTypes.string).isRequired,
};
