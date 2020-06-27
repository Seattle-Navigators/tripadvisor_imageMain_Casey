import React from 'react';
import PropTypes from 'prop-types';


class Modal extends React.Component {
  constructor(props){
    super(props)
    this.state={
      view: 'gallery'
    }
    this.clickHandler=this.clickHandler.bind(this);
    this.clickHandlerGallery=this.clickHandlerGallery.bind(this);
  }
  clickHandler(e) {
    e.preventDefault()
    this.setState({view:'fullscreen'})
  }
  clickHandlerGallery(e) {
    e.preventDefault()
    this.setState({view: 'gallery'})
  }


  render(){
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
        return(
          <div className="modal-Container-fullscreen">
            <div className="outside-close">
            <button onClick={this.props.close}>close me</button>
            <button onClick={this.clickHandlerGallery}>change views</button>
                   hola
            </div>
            <div className="inside-offset">
              <div className="fullscreen-content">

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

export default Modal;