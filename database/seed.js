const db = require('./index.js');
const Carousel = require('./Carousel.js');
const Chance=require('chance');
const chance= new Chance();

let data=[]




// makes an array of location id's
//for each id make a variable number of images
// ask team about padded numbers if you need to change use padStart.  string each integer then use list[i].padStart(3,'0') this will change uniqueLoc to string type so you will have to change your schema.

//also for this to be test data am i making this database too big?
let list=[]
for(let i=1; i < 101;i++){
    list.push(i)

}

list.forEach((loc)=>{
    let title=chance.word()
    let rating=chance.integer({min:0,max:5})
    let review=[chance.sentence(),chance.sentence()]

    const location={
        uniqueLoc:loc,
        title,
        rating,
        review,
        isHearted:false,
        images:[
        ]

    }
    let varNumImages=chance.integer({min:5,max:10})
    for(let i=0; i < varNumImages; i++){
        let titleTwo=chance.word()
        let userRating=chance.integer({min:0,max:5})
        let userName= chance.name()
        let timeOf= chance.year({min:2015,max:2020})
        let month=chance.month()
        let urlStart='https://ctj-hr-fec-carouseldata.s3-us-west-2.amazonaws.com/sampleData/'
        let rando=chance.integer({min:0,  max:100})
        let urlEnd='.JPG'
        let profile='https://ctj-hr-fec-carouseldata.s3-us-west-2.amazonaws.com/sampleData/profile.JPG'

        location.images.push({
            url:`${urlStart}${rando}${urlEnd}`,
            helpful:false,
            reported:false,
            profile,
            titleTwo,
            userRating,
            description:`Traveler photo submitted by ${userName} (${month} ${timeOf})`

        })
    }
    data.push(location)

})

const addTestData = function () {
  Carousel.create(data)
    // .then(() => db.disconnect())
    // .catch();
};

//comented out code was only used for testing dynamicly creating images, may keep test function for future use
// const getUrl= function (){
//   let urlArray=[];
//   let urlStart='https://ctj-hr-fec-carouseldata.s3-us-west-2.amazonaws.com/sampleData/'
//   let urlEnd='.JPG'
//   for(var i=0; i < 101; i+=1 ){
//     urlArray.push(`${urlStart}${i}${urlEnd}`)
//   }
//   console.log(urlArray)
// }


addTestData();
