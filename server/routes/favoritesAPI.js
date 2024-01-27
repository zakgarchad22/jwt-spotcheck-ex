const express = require('express');
const router = express.Router();
const users = require('../../fakeDB/users');
const jwt = require('jsonwebtoken')


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  const secretKey = 'your_secret_key';

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(401);
    req.user = user;
    next();
  });
}

router.use(authenticateToken)

router.get('/animals', (req, res) => {
  try {
    const user = findUser(req.user.id, req.user.username);
    console.log(user);
    const favAnimal = { "animal": user.animal };
    console.log(favAnimal);
    res.send(favAnimal);
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: 'Invalid token' });
  }
});

function findUser(id, username) {
  return users.filter(user => user.id === id && user.username === username)[0];
}

module.exports = router;
