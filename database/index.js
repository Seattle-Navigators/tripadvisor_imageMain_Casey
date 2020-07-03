const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongo/tripAdvisor';
//'mongodb://localhost/tripAdvisor';

const db = mongoose.connect(mongoUri);
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){

// })

module.exports.db = db;
