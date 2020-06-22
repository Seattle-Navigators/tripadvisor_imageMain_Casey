import React from 'react';
import axios from 'axios';

class Description extends React.Component{
  constructor(props){
    super(props)
    this.state={info:[]}
  }

  componentDidMount() {
    axios.get('/api/carousels/:id')
    .then(function(locationData){
      this.setState({ info: locationData });

    })
    .catch(function(err){
      console.log(err)

    })
  }

  render(){

    return(
      <div> xxx on a kill streak</div>

    )
  }
}

export default Description;