const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.header["Authorization"];

    if (!token) {
        return res.send({ status: 403, message: 'A token is required for authentication' });
    }

    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        return res.send({ status: 401, message: 'Invalid Token' });
    }
    return next();
}

module.exports = verifyToken;