import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({ leftFunc }) => (

  <div>
    <button type="button" className="left-arrow-div" onClick={leftFunc} onKeyDown={leftFunc}>
      <i className="fas fa-arrow-left"> </i>
    </button>
  </div>
);

LeftArrow.propTypes = {
  leftFunc: PropTypes.func, // eslint-disable-line
};

export default LeftArrow;
