import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineArrowLeft} from 'react-icons/ai';

const LeftArrow = ({ leftFunc }) => (

  <div>
    <button type="button" className="left-arrow-div" onClick={leftFunc}>
      <AiOutlineArrowLeft/>
    </button>
  </div>
);

LeftArrow.propTypes = {
  leftFunc: PropTypes.func, // eslint-disable-line
};

export default LeftArrow;
