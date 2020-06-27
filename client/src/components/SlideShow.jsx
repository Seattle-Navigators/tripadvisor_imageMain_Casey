import React from 'react';
import PropTypes from 'prop-types';

const SlideShow = ({ link }) => (

  <div className="display-image">
    <img src={link} alt="destination of amazement"> </img>
  </div>

);

SlideShow.propTypes = {
  link: PropTypes.string, // eslint-disable-line
};

export default SlideShow;
