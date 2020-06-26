import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ rightFunc }) => (

  <div
    className="right-arrow-div"
    onClick={rightFunc}
    onKeyDown={rightFunc}
    role="button"
    tabIndex="0"
  >
    <i className="fas fa-arrow-right"> </i>
  </div>

);

RightArrow.propTypes = {
  rightFunc: PropTypes.func, // eslint-disable-line
};

export default RightArrow;
