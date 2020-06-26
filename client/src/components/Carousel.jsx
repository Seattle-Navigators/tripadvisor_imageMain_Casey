import React from 'react';
import SlideShow from './SlideShow.jsx';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';

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
    let i = this.state.index;
    const arrLength = this.props.imgData.length - 1;
    //this should set i to the begining of the array
    if(i === arrLength ){
      i = -1;
    }
    i += 1;
    this.setState({
      index: i
    });

  }

  prevImg(event) {
    event.preventDefault();
    let i = this.state.index;
    // the arraylength has to be different so you dont skip an image
    const arrLength = this.props.imgData.length;
    // this should set i to the end of the array
    if (i < 1) {
      i = arrLength;
    };
    i -= 1
    this.setState({
      index: i
    });
  }
  render(){

    return (
      <div className="SlideShow">
        <RightArrow rightFunc={this.nextImg}/>
        <LeftArrow leftFunc={this.prevImg}/>
        <SlideShow link={this.props.imgData[this.state.index].url}/>
      </div>
    )
  }
}
// it should take a prop from description

// display images in a carousel

// should have a click option for full screen

// in full screen it should have data associated with image on the side

export default Carousel;
