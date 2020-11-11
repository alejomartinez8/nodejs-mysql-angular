'use strict';

const User = require('../models/user.model');

exports.login = function (req, res) {
  const { username, password } = req.body;

  User.login(username, password, function (err, token) {
    if (err) {
      console.log(err);
      res.status(400).send({ error: true, message: err });
    } else {
      res.json(token);
    }
  });
};
