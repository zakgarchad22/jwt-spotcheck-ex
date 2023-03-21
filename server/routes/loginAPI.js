const express = require('express');
const router = express.Router();
const users = require('../../fakeDB/users');
const loginUtils = require('../utils/login')


router.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const user = users.getUser(username, password)
  if (loginUtils.isValidUser(user, username, password)){
    const token = loginUtils.generateToken(user)
    res.send({ token });
  }

});

module.exports = router;
