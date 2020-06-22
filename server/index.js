const express = require('express');
const bodyParser = require('body-parser');
const Carousel = require('../database/Carousel.js');
const axios = require('axios'); // eslint-disable-line

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('public'));
// app.get(' /api/carousel/:id', (req, res) => res.send('hello world!'));
// /api/carousel/:id
app.get('/api/carousels/:id', (req, res) => {
  const id = req.params.id;
  Carousel.find({ uniqueLoc: `${id}` })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => console.log(`server listening to locolhost${port}`));
