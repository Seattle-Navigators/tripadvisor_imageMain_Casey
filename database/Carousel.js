const mongoose = require('mongoose');
// const db = require('./index.js'); comenting out to avoid pomander error

mongoose.Promise = global.Promise;

const carouselSchema = new mongoose.Schema({
  uniqueLoc: Number,
  rating: Number,
  review: [String],
  isHearted: Boolean,
  images: [Map],
});

const Carousel = mongoose.model('Carousel', carouselSchema);

module.exports = Carousel;
