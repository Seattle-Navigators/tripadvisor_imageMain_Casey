import React from 'react';
import axios from 'axios';
import './style.css';
import Chance from 'chance';
import BottomDescription from './BottomDescription.jsx';
import MidBar from './MidBar.jsx';
import Carousel from './Carousel.jsx';
const chance = new Chance();
class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [''],
    };

  }

  componentDidMount() {
    axios.get('/api/carousels/011')
      .then((locationData) => {
        this.setState({ info: locationData.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.info[0].review) {
      return null;
    }
    const loc = this.state.info[0];
    const fullRating = [...Array(loc.rating)].map((item, idx) => {return (<span className="circle" key={idx}> </span>)} );
    const emptyRating = [...Array(5 - loc.rating)].map((item, idx) => {return (<span className="empty-circle" key={idx}> </span>)} );
    const revNumber = chance.integer({ min: 900, max: 2100 }).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
      <div className="description">
        <div className="container">
          <div className="top-container">
            <div className="top-wrapper">
              <div className="header">
                <h1>{loc.title}</h1>
                <div className="right-header">
                  {loc.isHearted ? <i className="fas fa-heart"> </i> : <i className="far fa-heart"> </i>}
                </div>
                <div className="right-icon">
                <i className="fas fa-external-link-alt"> </i>
              </div>

            <div className="rating">
              {fullRating}
              {emptyRating}
              <span className="review-number">
                {revNumber}
                Reviews
              </span>
            </div>
            <div>
              <span id="misc-rev">
                <p id="mbold">
                #
              {chance.integer({ min: 1, max: 5 })}
              </p>
              </span>
              <span id="misc-revt">
                <p>
                  of
                {chance.integer({ min: 5, max: 25 })} things to do at this destination
                </p>
                </span>
            </div>

            </div>

          </div>

        </div>
        <div className="testme">
          <Carousel imgData={this.state.info[0].images} />
        </div>
        <div className="bottom-description-wraper">
          <BottomDescription quotes={this.state.info[0].review} />
        </div>
          <MidBar/>
        </div>
      </div>

    );
  }
}

export default Description;
