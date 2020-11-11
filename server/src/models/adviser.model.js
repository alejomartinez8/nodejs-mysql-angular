'use strict';

var db = require('../../config/db.config');
const getAge = require('../../src/helpers/getAge');

// Advisor object create
var Adviser = function (adviser) {
  this.full_name = adviser.full_name;
  this.legal_id = adviser.legal_id;
  this.phone = adviser.phone;
  this.date_of_birth = adviser.date_of_birth;
  this.gender = adviser.gender;
  this.client = adviser.client;
  this.headquarters = adviser.headquarters;
  this.user = adviser.user;
  this.age = adviser.age;
};

Adviser.create = function (newAdv, result) {
  newAdv.age = getAge(newAdv.date_of_birth);
  db.query('INSERT INTO adviser set ?', newAdv, function (err, res) {
    if (err) {
      console.log('error', err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Adviser.findAll = function (result) {
  db.query('SELECT * from adviser', function (err, res) {
    if (err) {
      console.log('error', err);
      result(err, null);
    } else {
      console.log('advisers: ', res);
      result(null, res);
    }
  });
};

Adviser.findById = function (id, result) {
  db.query('SELECT * from adviser where id = ? ', id, function (err, res) {
    if (err) {
      console.log('error', err);
      result(err, null);
    } else {
      console.log('adviser: ', res);
      result(null, res);
    }
  });
};

Adviser.update = function (id, adviser, result) {
  adviser.age = getAge(adviser.date_of_birth);

  db.query(
    'UPDATE adviser SET full_name=?, legal_id=?, phone=?, date_of_birth=?, gender=?, client=?, headquarters=?, user=?, age=? WHERE id=?',
    [
      adviser.full_name,
      adviser.legal_id,
      adviser.phone,
      adviser.date_of_birth,
      adviser.gender,
      adviser.client,
      adviser.headquarters,
      adviser.user,
      adviser.age,
      id
    ],
    function (err, res) {
      if (err) {
        console.log('error', err);
        result(err, null);
      } else {
        console.log('update: ', res);
        result(null, res);
      }
    }
  );
};

Adviser.delete = function (id, result) {
  db.query('DELETE FROM adviser WHERE id = ?', [id], function (err, res) {
    if (err) {
      console.log('error', err);
      result(err, null);
    } else {
      console.log('adviser deleted', res);
      result(null, res);
    }
  });
};

module.exports = Adviser;
