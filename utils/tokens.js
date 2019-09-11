import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) =>{
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.status(403).end();
    }
};

const verify = (req, res, next) => {  
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if(err) {
        res.status(403).end();
      } else {
        next();
      }
    });
};
export {verifyToken, verify}