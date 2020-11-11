const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  //Get token from header

  const token = req.headers.authorization.split(' ')[1];
  console.log(token);

  //Check if token exist
  if (!token) {
    return res.status(401).json({ msg: 'Sin token, autorización denegada' });
  }
  //Verify token
  try {
    const decoded = jwt.verify(token, 'MyS3cr3t');
    console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token no es válido' });
  }
};
