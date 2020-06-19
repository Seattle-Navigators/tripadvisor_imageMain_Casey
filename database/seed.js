const db = require('./index.js');
const Carousel = require('./Carousel.js');
// uniqueLoc:Number,
// rating:Number,
// review:[String],
// isHearted:Boolean,
// images:[Map]
const data = [
  {
    id: 1,
    rating: 4,
    review: ['lalala', 'lololol'],
    isHearted: true,
    image: [
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
    locId: 2,
    rating: 5,
    review: ['zezezez', 'xexexexe'],
    isHearted: false,
    image: [
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
    .then(() => db.disconnect());
};

addTestData();
