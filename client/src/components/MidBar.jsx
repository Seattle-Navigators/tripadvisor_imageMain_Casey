import React from 'react';

const MidBar=()=>(
  <div className="bar-border">
  <div className="midbar">
    <div className="midbar-spacing">
      <div id="walking-icon"><span><i className="fas fa-hiking"></i></span></div>
      <div>
        <span id="mid-header">5 tours and experiences</span>
      </div>
      <div>
        <span id="mid-subheader">Cultural tours, Walking tours, Biking Tours and more</span>
      </div>

    </div>
  </div>
  <button className="black-bar">
     <div id="white-text">See available tour options <i className="fas fa-arrow-down"></i></div>
     </button>
  </div>
)

export default MidBar;