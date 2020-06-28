import React from 'react';
import PropTypes from 'prop-types';
import ModalSlide from './ModalSlide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';



class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'fullscreen',
      newindex: this.props.current,
      galOption:this.props.GalBool

    };

    this.SlideOnClick = this.SlideOnClick.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.clickHandlerGallery = this.clickHandlerGallery.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
  }
  // componentDidMount(){
  //   this.setState({ index:this.props.current })
  // }

  clickHandler(e) {
    e.preventDefault();
    this.setState({ view: 'fullscreen' });
  }

  clickHandlerGallery(e) {
    e.preventDefault();
    this.setState({ view: 'gallery' });
  }

  nextImg(event) {
    event.preventDefault();
    const { newindex } = this.state;

    let index = newindex;
    const { imginfo } = this.props;
    if (index === imginfo.length - 1) {
      index = -1;
    }
    index += 1;
    this.setState({ newindex: index }); // eslint-disable-line

  }

  prevImg(event) {
    event.preventDefault();

    let { newindex } = this.state;
    // the arraylength has to be different so you dont skip an image
    const { imginfo } = this.props;

    // this should set i to the end of the array
    if (newindex < 1) {
      newindex = imginfo.length;
    }
    newindex -= 1;
    this.setState({
      newindex,
    });
  }

  SlideOnClick(index) {

    this.setState({
      newindex: index,
    });
    this.clickHandler(event);
  }

  render() {

    const testOne = [];
    const { imginfo, close , GalBool} = this.props;
    const { newindex, view,  } = this.state;
    imginfo.forEach((item) => testOne.push(item));

    const galleryitem = testOne.map((item, index) => (
      <div className="gallery-box" key={index + 10}>
        <img className="gallery-box-sizing" src={testOne[index].url} alt="mini-pic-gallery" onClick={() => { return this.SlideOnClick(index); }} />
      </div>
    ));

    const userData = imginfo[newindex];

    const fullRating = [...Array(userData.userRating)].map((item, i) => ((<span className="profile-circle" key={i.toString()}> </span>)));
    // this variable makes the empty circles
    const emptyRating = [...Array(5 - userData.userRating)].map((item, i) => ((<span className="profile-empty-circle" key={i.toString()}> </span>)));
      console.log('inside modal', GalBool)
    if ( GalBool === true || view === 'gallery' ) {
      return (
        <div className="modal-Container-gallery">
          <div className="outside-close">
            <button className="modal-close-button" onClick={close} type="button">
              <i className="fas fa-times"> </i>
            </button>

          </div>
            <div className="inside-offset">
              <div className="scroll-content">
                <div className="height-limiter">
                  {galleryitem}
                </div>
              </div>
              <div className="side-bar">

              </div>
            </div>

          </div>
        )
      }else {

          return(
          <div className="modal-Container-fullscreen">
            <div className="outside-close">
              <button className="modal-close-button"onClick={close}>
                <i className="fas fa-times"> </i>
              </button>
            </div>
          <div className="inside-offset">
            <div className="fullscreen-content">
              <div className="full-content-styling">
                <ModalSlide urlString={imginfo[newindex].url} />
                <div className="gallery-overlay">
                  <button className="gallery-button"onClick={this.clickHandlerGallery}>
                    <i className="fas fa-th-large"> </i>
                    Gallery
                  </button>
                </div>
                <div className="modal-left-arrow-overlay">
                  <LeftArrow leftFunc={this.prevImg} />
                </div>
                <div className="modal-right-arrow-overlay">
                  < RightArrow rightFunc={this.nextImg}/>
                </div>
              </div>
              {newindex >= 0?<div className="side-bar">
                <div className="user-profile-container">
                  <div className="user-profile-offset">
                  <div className="left-profile-section">
                  <img className="profile-pic" src={userData.profile}/>
                </div>
              <div className="user-description">
                <div className="user-rating">
                {fullRating}{emptyRating}
                </div>
                <div className="user-title">
                  {`${userData.titleTwo}`}
                </div>
                <div className="user-misc-info">
                  {`${userData.description}`}
                </div>
              </div>
                  </div>
              </div>
            </div> :<div></div>}

            </div>

            </div>

          </div>
          )
        }
      }
    }




export default Modal;