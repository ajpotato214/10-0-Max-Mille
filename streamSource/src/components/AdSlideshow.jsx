import React from 'react';
import { Fade } from 'react-slideshow-image';
import PropTypes from 'prop-types';

import Ad from './Ad';

import 'react-slideshow-image/dist/styles.css';

export default function AdSlideshow(props) {
  const { durationPerAd, images } = props;

  const advertisements = images.map((image) => {
    const filename = require(`./img/${image.filename}`).default;

    return <Ad className="each-fade" image={filename} />;
  });

  return (
    <Fade arrows={false} duration={durationPerAd}>
      {advertisements}
    </Fade>
  );
}

AdSlideshow.propTypes = {
  durationPerAd: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AdSlideshow.defaultProps = {
  durationPerAd: 5000,
};
