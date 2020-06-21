const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const carouselSchema = new mongoose.Schema({
  uniqueLoc: Number,
  title: String,
  rating: Number,
  review: [String],
  isHearted: Boolean,
  images: [Map],
});

const Carousel = mongoose.model('Carousel', carouselSchema);

//find all functions to pull the two entries from sample data
//refactor or add aditional functions to specificaly pull image urls
// const findAll=function(){
//    return Carousel.find({})
//    .then(function(response){
//      return response
//    })
//    .catch(function(err){
//      return err
//    })
// }

module.exports = Carousel;
//module.exports.findAll = findAll;