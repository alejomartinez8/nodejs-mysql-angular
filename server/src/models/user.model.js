'use strict';
const jwt = require('jsonwebtoken');
var db = require('../../config/db.config');

var User = function (user) {
  this.username = user.username;
  this.password = user.password;
  this.active = user.active;
};

User.login = function (username, password, result) {
  db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function (err, res) {
    if (err) {
      console.log('error login', err);
      result(err, null);
    } else {
      const user = res[0];

      if (!user) {
        result('Usuario o contraseña no válida', null);
      } else if (!user.active) {
        result('Usuario no activo', null);
      } else {
        console.log('Login exitoso');
        const token = generateJwtToken(res[0]);
        result(null, {
          id: user.id,
          username: user.username,
          active: user.active,
          accessToken: token
        });
      }
    }
  });
};

function generateJwtToken(user) {
  const payload = {
    user: {
      id: user.id,
      username: user.username,
      active: user.active
    }
  };

  return jwt.sign(payload, 'MyS3cr3t', { expiresIn: '7d' });
}

module.exports = User;
