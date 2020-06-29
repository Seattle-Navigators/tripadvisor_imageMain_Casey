import React from 'react';
import PropTypes from 'prop-types';

const MiniSlider = (props) => {

  return (

  <div className="mini-container">
    <img className="mini-image-styling" src={props.mLink} alt="mini slider on fullscreen" onClick={() => props.setIndex(props.i)} />

  </div>
  );
};

export default MiniSlider;
