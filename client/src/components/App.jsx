import React from 'react';
import Description from './Description.jsx'
/*
this app component should be the homepage in a way for the other componets

theer shoudld be three components rendered one is a description one is the image carouselnext to it and a third one potentialy for the fullscreen model view
*/
const App = (props) => (
  <div id="image-main">
  <Description testOne={props.test} />
  </div>
);

export default App;
