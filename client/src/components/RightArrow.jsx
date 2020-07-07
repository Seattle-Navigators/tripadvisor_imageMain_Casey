import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineArrowRight} from 'react-icons/ai';
const RightArrow = ({ rightFunc }) => (

  <div>
    <button type="button" className="right-arrow-div" onClick={rightFunc}>
      <AiOutlineArrowRight />
    </button>
  </div>
);

RightArrow.propTypes = {
  rightFunc: PropTypes.func, // eslint-disable-line
};

export default RightArrow;
