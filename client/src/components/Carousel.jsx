import React from 'react';
import PropTypes from 'prop-types';
import SlideShow from './SlideShow';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.nextImg.bind(this);
  }

  nextImg(event) {
    event.preventDefault();
    let { index } = this.state;
    const { imgData } = this.props;
    // this should set i to the begining of the array
    if (index === imgData.length) {
      index = -1;
    }
    index += 1;
    this.setState({
      index,
    }); // eslint-disable-line

  }

  prevImg(event) {
    event.preventDefault();
    let { index } = this.state;
    // the arraylength has to be different so you dont skip an image
    const { imgData } = this.props;

    // this should set i to the end of the array
    if (index < 1) {
      index = imgData.length;
    }
    index -= 1;
    this.setState({
      index,
    });
  }

  render() { // eslint-disable-line

    const { index } = this.state;
    const { imgData } = this.props;

    return (
      <div className="SlideShow">
        <RightArrow rightFunc={this.nextImg} />
        <LeftArrow leftFunc={this.prevImg} />
        <SlideShow link={imgData[index].url} />
      </div>
    );
  }
}

Carousel.propTypes = {
  imgData: PropTypes.arrayOf(PropTypes.object ,PropTypes.string, PropTypes.bool, PropTypes.number), // eslint-disable-line
}; // eslint-disable-line
// it should take a prop from description

// display images in a carousel

// should have a click option for full screen

// in full screen it should have data associated with image on the side

export default Carousel;
