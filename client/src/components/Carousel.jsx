import React from 'react';
import PropTypes from 'prop-types';
import SlideShow from './SlideShow';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Modal from './Modal';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      index: 0,
      passIndex: 0,
    };
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.ModalWindow = this.ModalWindow.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);
  }

  ModalWindow(e) {
    e.preventDefault();
    this.setState({ show: true, passIndex: this.state.index });
  }

  closeModalWindow(e) {
    e.preventDefault();
    this.setState({ show: false });
  }

  nextImg(event) {
    event.preventDefault();
    let { index } = this.state;
    const { imgData } = this.props;
    // this should set i to the begining of the array
    if (index === imgData.length - 1) {
      index = -1;
    }
    index += 1;
    this.setState({ index }); // eslint-disable-line

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

    const { index, show, passIndex } = this.state;
    const { imgData } = this.props;

    return (
      <div className="carousel-size">
        {show ?
        <Modal imginfo={imgData}
          close={this.closeModalWindow}
          current={passIndex}

        /> : <div> </div>}
        <SlideShow link={imgData[index].url} />
        <div className="left-overlay">
          <LeftArrow leftFunc={this.prevImg} />
        </div>
        <div className="right-overlay">
          <RightArrow rightFunc={this.nextImg} />
        </div>
        <div className="full-button-overlay">
          <button className="full-button" onClick={this.ModalWindow} type="button">
            <i className="fas fa-expand-alt"> </i>
          Full view
          </button>

        </div>
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
