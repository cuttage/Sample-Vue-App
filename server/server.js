const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;
const statistics = require('./data/statistics.json')

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/statistics', (req, res) => {
  res.send(statistics);
});

app.listen(port);
