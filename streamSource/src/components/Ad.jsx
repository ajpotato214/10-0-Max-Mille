import React from 'react';
import PropTypes from 'prop-types';

export default function Ad(props) {
  const { image } = props;

  return <img alt="advertisement" src={image} />;
}

Ad.propTypes = {
  image: PropTypes.string.isRequired,
};
