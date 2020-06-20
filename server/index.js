const express = require('express');
const axios= require('axios');
const bodyParser = require('body-parser');
const Carousel = require('../database/Carousel.js')

const app = express();
const port = 3000;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
//app.get(' /api/carousel/:id', (req, res) => res.send('hello world!'));
///api/carousel/:id
app.get('/api/carousels',function(req,res){
  Carousel.find({})
  .then(function(response){
    res.send(response)
  })
  .catch(function(err){
    res.send(err)
  })
})

app.listen(port, () => console.log(`server listening to locolhost${port}`));
