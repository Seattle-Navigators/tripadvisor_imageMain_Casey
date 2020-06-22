import React from 'react';
import axios from 'axios';

class Description extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      info:[]
    };
  }

  componentDidMount() {
    axios.get('/api/carousels/007')
    .then((locationData)=>{
      this.setState({ info:locationData.data});
      console.log(this.state.info[0].title)

    })
    .catch((err)=>{
      console.log(err)

    });
  }

  render(){
    console.log(this.state.info[0].title)
    //let loc=this.state.info[0];
    return(
    <div className = "description">
      <h1></h1>
      <p></p>
    </div>

    )
  }
}

export default Description;