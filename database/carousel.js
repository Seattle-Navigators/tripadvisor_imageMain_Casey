const mongoose = require('mongoose');
const db = require('./index.js');

const carouselSchema= new mongoose.Schema({
uniqueLoc:Number,
review:[String]
isHearted:Boolean,
images:{
  type:Map,
  of:Mixed
}

/*
url
boolean1 <--- a strng?

boolean2
review
*/


})

const Carousel =mongoose.model('Carousel',carouselSchema);
//mock data im making to test my maping function
let data=[
  {
    locId:1,
    review:['lalala', 'lololol'],
    isHearted:true,
    image:{
      {url:'cool',
      bool1:false,
      bool2:false,
      },
      {url:'hot',
      bool1:false,
      bool2:true,
      },
    },

},
{
  locId:2,
  review:['zezezez', 'xexexexe'],
  isHearted:false,
  image:{
    {url:'nice',
    bool1:true,
    bool2:false,
    },
    {url:'weefr',
    bool1:true,
    bool2:true,
    }
  },

}

]


let save=(data)=>{
  Carousel.count()// check if its already exists
}


module.exports=Carousel;