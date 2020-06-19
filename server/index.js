const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.get(' /api/carousel/:id', (req, res) => res.send('hello world!'));

app.listen(port, () => console.log(`server listening to locolhost${port}`));
