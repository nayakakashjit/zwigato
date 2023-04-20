const jwt = require('jsonwebtoken');
const config = require('../config')

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.send({ status: 403, message: 'A token is required for authentication' });
    }

    try {
        const decoded = jwt.verify(token, config.secret);
        req.user = decoded;
    } catch (error) {
        return res.send({ status: 401, message: 'Invalid Token' });
    }
    return next();
}

module.exports = verifyToken;