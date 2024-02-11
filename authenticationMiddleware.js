const jwt = require('jsonwebtoken');

function authenticationMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token is not provided' });
  }

  try {
    const decoded = jwt.verify(token, 'ghftyfyiggig4576878@#$_');
    req.user = decoded;
    next();
  } 
  catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = authenticationMiddleware;
