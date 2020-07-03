import React from 'react';
import {FaHiking} from 'react-icons/fa'
import {BsArrowDownShort} from 'react-icons/bs';
const MidBar = () => (
  <div className="bar-border">
    <div className="midbar">
      <div className="midbar-spacing">
        <div id="walking-icon">
          <span>
            <FaHiking />
          </span>
        </div>
        <div>
          <span id="mid-header">
            5 tours and experiences
          </span>
        </div>
        <div>
          <span id="mid-subheader">
            Cultural tours, Walking tours, Biking Tours and more
          </span>
        </div>

      </div>
    </div>
    <button type="button" className="black-bar">
      <div id="white-text">
        See available tour options
        <BsArrowDownShort />
      </div>
    </button>
  </div>
);

export default MidBar;
