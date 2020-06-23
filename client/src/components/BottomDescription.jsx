import React from 'react';
import "./style.css";
const BottomDescription = (props) =>(
  <div>
    <div className = "bottom-description-reviews">
      <h2>What travelers are saying</h2>
      <div id="rev-spacing">
        <div className="reviews">
          <div id="review-styling">
          <i className="fas fa-quote-right"></i>{props.quotes[0]}
          </div>
          <div id="review-styling-two">
          <i className="fas fa-quote-right"></i>{props.quotes[1]}
          </div>
        </div>
      </div>
      <div className="rev-footer">
      <i className="far fa-edit"></i> improve this listing
      </div>
    </div>
  </div>

)

export default BottomDescription;