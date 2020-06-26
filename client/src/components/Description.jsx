import React from 'react';
import axios from 'axios';
import './style.css';
import Chance from 'chance';
import BottomDescription from './BottomDescription';
import MidBar from './MidBar';
import Carousel from './Carousel';

const chance = new Chance();
class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHearted: false,
      rating: 0,
      review: [''],
      title: '',
      images: [{}],
    }; // eslint-disable-line

  }

  componentDidMount() {
    axios.get('/api/carousels/011')
      .then((locationData) => {
        this.setState({
          rating: locationData.data[0].rating,
          review: locationData.data[0].review,
          title: locationData.data[0].title,
          images: locationData.data[0].images,
        });
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line
      });
  }

  render() { // eslint-disable-line

    const {
      isHearted,
      rating, review,
      title,
      images,
    } = this.state;

    const fullRating = [...Array(rating)].map((item, i) => ((<span className="circle" key={i.toString()}> </span>)));
    const emptyRating = [...Array(5 - rating)].map((item, i) => ((<span className="empty-circle" key={i.toString()}> </span>)));
    const revNumber = chance.integer({ min: 900, max: 2100 }).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
      <div className="description">
        <div className="container">
          <div className="top-container">
            <div className="top-wrapper">
              <div className="header">
                <h1>{title}</h1>
                <div className="right-header">
                  {isHearted ? <i className="fas fa-heart"> </i> : <i className="far fa-heart"> </i>}
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
                      {chance.integer({ min: 5, max: 25 })}
                      things to do at this destination
                    </p>
                  </span>
                </div>

              </div>

            </div>

          </div>
          <div className="testme">
            <Carousel imgData={images} />
          </div>
          <div className="bottom-description-wraper">
            <BottomDescription quotes={review} />
          </div>
          <MidBar />
        </div>
      </div>

    );
  }
}

export default Description;
