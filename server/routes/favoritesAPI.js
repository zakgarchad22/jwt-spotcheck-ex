
const express = require('express');
const router = express.Router();
const users = require('../../fakeDB/users')


router.get('/animals', (req, res) => {
  try {
    let user = req.user
    const favouriteAnimal = users.getUser(user.username).animal
    res.send({ message: favouriteAnimal });
  } catch (error) {
    console.log(error)
    res.status(401).send({ message: 'Something went wrong' });
  }
});


module.exports = router;
