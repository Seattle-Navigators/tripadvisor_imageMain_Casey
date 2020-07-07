const mongoose = require('mongoose');

// const mongoUri = ('mongodb://database/tripAdvisor', { useNewUrlParser: true, useUnifiedTopology: true });
//'mongodb://mongo/tripAdvisor';
//'mongodb://localhost/tripAdvisor';

const envOp = process.env.DB || 'localhost';
const mongoUri = `mongodb://${envOp}/listing`;
const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){

// })

module.exports.db = db;
