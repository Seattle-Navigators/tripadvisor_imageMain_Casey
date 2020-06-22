const mongoose = require('mongoose');

const db = require('./index.js'); // eslint-disable-line

mongoose.Promise = global.Promise;

const carouselSchema = new mongoose.Schema({
  uniqueLoc: String,
  title: String,
  rating: Number,
  review: [String],
  isHearted: Boolean,
  images: [Map],
});

const Carousel = mongoose.model('Carousel', carouselSchema);

module.exports = Carousel;
