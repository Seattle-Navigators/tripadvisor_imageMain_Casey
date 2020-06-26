import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({ leftFunc }) => (

  <div
    className="left-arrow-div"
    onClick={leftFunc}
    onKeyDown={leftFunc}
    role="button"
    tabIndex="0"
  >
    <i className="fas fa-arrow-left"> </i>
  </div>

);

LeftArrow.propTypes = {
  leftFunc: PropTypes.func, // eslint-disable-line
};

export default LeftArrow;
