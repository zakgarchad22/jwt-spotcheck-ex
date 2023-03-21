const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secretKey = 'my_secret_key';

const hashPassword = function (password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt)
}

isValidUser = function (user, username, password) {
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    return isPasswordValid
}

const generateToken = (user) => {
    const token = jwt.sign({ username: user.username }, secretKey)
    return token
}

function authenticateToken(token, callback) {
    jwt.verify(token, secretKey, callback)
}

module.exports = { isValidUser, hashPassword, generateToken, authenticateToken }


