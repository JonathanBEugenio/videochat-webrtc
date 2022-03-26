const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];

    if(!token) {
        // http status forbidden 
        res.status(403).send('A token is required for authentication');
    }

    try {
        // replace 'Bearer ' string to empty string ''
        token = token.replace(/^Bearer\s+/, '');
        
        // decode token
        const decodedToken = jwt.verify(token, config.TOKEN_KEY);

        req.user = decodedToken;
    } catch (error) {
        // http status unauthorized
        return res.status(401).send('Invalid token.');
    }

    return next();
};

module.exports = verifyToken;