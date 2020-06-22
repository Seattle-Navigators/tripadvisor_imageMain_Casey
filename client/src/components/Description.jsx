import React from 'react';
import axios from 'axios';
import "./style.css";
import Chance from 'chance';
const chance = new Chance();
class Description extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      info:['']
    };

  }

  componentDidMount() {
    axios.get('/api/carousels/011')
    .then((locationData)=>{
      this.setState({ info:locationData.data});
    })
    .catch((err)=>{
      console.log(err)
    });
  }

    // this function will generate a randooom number of reviews formated with commas
    // let revNumber= chance.integer({ min: 900, max: 2100 }).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


  render(){
    if (!this.state.info[0].review) {
      return null;
    }
    let loc=this.state.info[0];
    let fullRating=[...Array(loc.rating)].map((item,idx)=>{return(<span className="circle" key={idx}></span>)})
    let emptyRating=[...Array(5-loc.rating)].map((item,idx)=>{return(<span className="empty-circle" key={idx}></span>)})
    console.log(loc.rating)
    let revNumber = chance.integer({ min: 900, max: 2100 }).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")



    return(
    <div className = "description">
      <div className="container">
        <div className="top-container">
          <div className="top-wrapper">
            <div className="header">
            <h1>{loc.title}</h1>
            <div className="rating">{fullRating}{emptyRating}<span className="review-number">{revNumber} Reviews</span>
            </div>
            <div>
              <span id="misc-rev"><p id="mbold">#{chance.integer({min: 1, max: 5})}</p></span><span id="misc-revt"><p>of {chance.integer({min: 5, max: 25})} things to do at this destination</p></span>
            </div>
            <div className="right-header">hello</div>
            </div>

          </div>

        </div>
        <div className="body">

        <h2>What travelers are saying</h2>
        <p>{this.state.info[0].review[0]}</p>
        <p>{this.state.info[0].review[1]}</p>

        </div>

      </div>



    </div>

    )
  }
}

export default Description;