const db = require('./index.js');
const Carousel = require('./Carousel.js');
// uniqueLoc:Number,
// rating:Number,
// review:[String],
// isHearted:Boolean,
// images:[Map]
const data = [
  {
    uniqueLoc: 1,
    rating: 4,
    review: ['lalala', 'lololol'],
    isHearted: true,
    images: [
      {
        url: 'cool',
        report: false,
        helpful: false,
      },
      {
        url: 'hot',
        report: false,
        helpful: true,
      },
    ],

  },
  {
    uniqueLoc: 2,
    rating: 5,
    review: ['zezezez', 'xexexexe'],
    isHearted: false,
    images: [
      {
        url: 'nice',
        report: true,
        helpful: false,
      },
      {
        url: 'weeee',
        report: true,
        helpful: true,
      },
    ],

  },

];

const addTestData = function () {
  Carousel.create(data)
    // .then(() => db.disconnect())
    // .catch();
};

addTestData();
