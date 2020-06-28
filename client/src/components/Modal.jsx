import React from 'react';
import PropTypes from 'prop-types';
import ModalSlide from './ModalSlide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';


class Modal extends React.Component {
  constructor(props){
    super(props)
    this.state={
      view: 'gallery',
      newindex:0,
      secindex:0,
      conditional:null,

    }
    console.log(this.state.newindex)
    this.clickHandler=this.clickHandler.bind(this);
    this.clickHandlerGallery=this.clickHandlerGallery.bind(this);
    this.prevImg=this.prevImg.bind(this);
    this.nextImg=this.nextImg.bind(this);
  }
  // componentDidMount(){
  //   this.setState({ index:this.props.current })
  // }

  clickHandler(e) {
    e.preventDefault()
    this.setState({view:'fullscreen'})
  }
  clickHandlerGallery(e) {
    e.preventDefault()
    this.setState({view: 'gallery'})
  }
  nextImg(event) {
    event.preventDefault();
    console.log('called props in func',this.props.current)
    if(this.state.conditional ===null){
      this.setState({ newindex:this.props.current, conditional:true})
    }
    let { newindex } = this.state;
    const { imginfo } = this.props;
    if (newindex === imginfo.length - 1) {
      newindex = -1;
    }
    newindex += 1;
    this.setState({ newindex }); // eslint-disable-line

  }

  prevImg(event) {
    event.preventDefault();
    if(this.state.conditional ===null){
      this.setState({newindex:this.props.current, conditional:true})
    }
    let { newindex } = this.state;
    // the arraylength has to be different so you dont skip an image
    const { imginfo } = this.props;

    // this should set i to the end of the array
    if (newindex < 1) {
      newindex = imginfo.length;
    }
    newindex -= 1;
    this.setState({
      newindex
    });
  }


  render(){

    console.log('called props before render',this.props.current)
    if(this.props.show === false){
      return null;

    }else{
      if(this.state.view === 'gallery'){
        return(
          <div className="modal-Container-gallery">
            <div className="outside-close">
            <button onClick={this.props.close}>close me</button>
            <button onClick={this.clickHandler}>change views</button>
                  hello
            </div>
            <div className="inside-offset">
              <div className="scroll-content">
                <div className="height-limiter">
                  when clicking from the normal carousel you have to
                  maintain the image index as you go to full screen
                  but not from full screen to normal

                  images should go here
                 confirmed scroll works
                 while in galery clicking on that
                 image jumps it to fullscreen
                 at that index

                 hoever clicking the galler button or the close button in
                 fullscreen does not jump to an image

                </div>
              </div>
              <div className="side-bar">

              </div>
            </div>

          </div>
        )
      }else{
        if(this.state.conditional===null){
          return(<div className="modal-Container-fullscreen">
          <div className="outside-close">
          <button onClick={this.props.close}>close me</button>
          <button onClick={this.clickHandlerGallery}>change views</button>
                 hola
          </div>
          <div className="inside-offset">
            <div className="fullscreen-content">
              <div className="full-content-styling">
                {console.log('called props after render in null',this.props.current)}
                <ModalSlide urlString={this.props.imginfo[this.props.current].url} />
                <div className="modal-left-arrow-overlay">
                  <LeftArrow leftFunc={this.prevImg} />
                </div>
                <div className="modal-right-arrow-overlay">
                  < RightArrow rightFunc={this.nextImg}/>
                </div>
              </div>

            </div>
            <div className="side-bar">

            </div>

          </div>

        </div>)

        }else{

          return(<div className="modal-Container-fullscreen">
          <div className="outside-close">
          <button onClick={this.props.close}>close me</button>
          <button onClick={this.clickHandlerGallery}>change views</button>
                 hola
          </div>
          <div className="inside-offset">
            <div className="fullscreen-content">
              <div className="full-content-styling">
                {console.log(this.state.index)}
                <ModalSlide urlString={this.props.imginfo[this.state.newindex].url} />
                <div className="modal-left-arrow-overlay">
                  <LeftArrow leftFunc={this.prevImg} />
                </div>
                <div className="modal-right-arrow-overlay">
                  < RightArrow rightFunc={this.nextImg}/>
                </div>
              </div>

            </div>
            <div className="side-bar">

            </div>

          </div>

        </div>

          )

        }

      }
    }
  }

}

export default Modal;