import React from 'react';
import propTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default function Notification({ notification }) {
  const { message, type } = notification;
  const isOpen = message !== null;
  return (
    <Alert isOpen={isOpen} className="notify" color={type}>
      {message}
    </Alert>
  );
}

Notification.propTypes = {
  notification: propTypes.objectOf(propTypes.string).isRequired,
};
