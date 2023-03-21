const loginUtils = require('../utils/login')

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) { return res.sendStatus(401); }
    loginUtils.authenticateToken(token, (err, user) => {
        if (err) {
            return res.sendStatus(401)
        } else {
            req.user = user;
            next();
        }
    })
}

module.exports = {authenticateToken}