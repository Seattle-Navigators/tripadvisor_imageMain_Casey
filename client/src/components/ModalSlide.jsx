import React from 'react';
import PropTypes from 'prop-types';

const ModalSlide = ({ urlString }) => (

  <div className="Modal-img-div">
    <img className="img-full" src={urlString} alt="destination of amazement" />
  </div>
);

ModalSlide.propTypes = {
  urlString: PropTypes.string, // eslint-disable-line
};

export default ModalSlide;
