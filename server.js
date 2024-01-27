const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const loginRouter = require('./server/routes/loginAPI');
const favRouter = require('./server/routes/favoritesAPI'); // Correct the path to the favoritesAPI module

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function logger(req, res, next) {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
}


app.use(logger);

app.get('/sanity', (req, res) => {
  res.send("Alive and running");
});

app.use('/', loginRouter);
app.use('/favorites', favRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


