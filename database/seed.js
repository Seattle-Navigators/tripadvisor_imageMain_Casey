const Chance = require('chance');
const Carousel = require('./Carousel.js');
const db = require('./index.js'); // eslint-disable-line

const chance = new Chance();

const data = [];
const con = [];
const list = [];

for (let i = 1; i < 101; i += 1) {
  con.push(`${i}`);
}
for (let j = 0; j < 100; j += 1) {
  list.push(con[j].padStart(3, '0'));
}

list.forEach((loc) => {
  const title = chance.word();
  const rating = chance.integer({ min: 0, max: 5 });
  const review = [chance.sentence(), chance.sentence()];

  const location = {
    uniqueLoc: loc,
    title,
    rating,
    review,
    isHearted: false,
    images: [],

  };
  // gives me a random number of images to put inside each location
  const varNumImages = chance.integer({ min: 5, max: 10 });
  for (let i = 0; i < varNumImages; i += 1) {
    const titleTwo = chance.word();
    const userRating = chance.integer({ min: 0, max: 5 });
    const userName = chance.name();
    const timeOf = chance.year({ min: 2015, max: 2020 });
    const month = chance.month();
    const urlStart = 'https://ctj-hr-fec-carouseldata.s3-us-west-2.amazonaws.com/sampleData/';
    // rando variable is a random number to complete the url path so each picture is random 1-100
    const rando = chance.integer({ min: 0, max: 100 });
    const urlEnd = '.JPG';
    const profile = 'https://ctj-hr-fec-carouseldata.s3-us-west-2.amazonaws.com/sampleData/profile.JPG';

    location.images.push({
      url: `${urlStart}${rando}${urlEnd}`,
      helpful: false,
      reported: false,
      profile,
      titleTwo,
      userRating,
      description: `Traveler photo submitted by ${userName} (${month} ${timeOf})`,

    });
  }
  data.push(location);
});

const addTestData = function () {
  Carousel.create(data);
};

addTestData();
