import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ rightFunc }) => (

  <div>
    <button type="button" className="right-arrow-div" onClick={rightFunc} >
      <i className="fas fa-arrow-right"> </i>
    </button>
  </div>
);

RightArrow.propTypes = {
  rightFunc: PropTypes.func, // eslint-disable-line
};

export default RightArrow;
