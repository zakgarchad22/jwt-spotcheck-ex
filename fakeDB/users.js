const loginUtils = require('../server/utils/login')

const users = [
  {
    id: 1,
    username: 'ameerj',
    password: 'meowmeow', // hashed password: 'password'
    animal: "cat"
  },
  {
    id: 2,
    username: 'lotemh',
    password: "123",// hashed password: '123456'
    animal: "owl"
  }
];


users.forEach(user => {
  user.password = loginUtils.hashPassword(user.password)
})

users.getUser = function (username) {
  for (let user of users) {
    if (user.username === username) {
      return user
    }
  }
}

function findUser(id, username) {
  return users.filter(user =>
    user.id === id && user.username === username)[0]
}

module.exports = users;
