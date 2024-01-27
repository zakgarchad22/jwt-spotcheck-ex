const express = require('express');
const router = express.Router();
const users = require('../../fakeDB/users');
const bcrypt = require('bcryptjs');



const secretKey = 'my_secret_key';

bcrypt.hashSync(secretKey,bcrypt.genSaltSync(10))

router.post('/login', (req, res) => {
  res.send({ msg:"logged in?" });
});

module.exports = router;
