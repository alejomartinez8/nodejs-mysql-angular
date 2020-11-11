'use strict';

const Adviser = require('../models/adviser.model');

exports.create = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Enviar todos los campos requeridos' });
  } else {
    const adviser = new Adviser({ ...req.body, user: req.user.id });
    Adviser.create(adviser, function (err, adviser) {
      if (err) res.send(err);
      res.json({ error: false, message: 'Asesor agregado satisfactoriamente', data: adviser });
    });
  }
};

exports.findAll = function (req, res) {
  Adviser.findAll(function (err, advisers) {
    if (err) res.send(err);
    res.send(advisers);
  });
};

exports.findById = function (req, res) {
  Adviser.findById(req.params.id, function (err, adviser) {
    if (err) res.send(err);
    res.send(adviser);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Enviar todos los campos requeridos' });
  } else {
    const adviser = new Adviser({ ...req.body, user: req.user.id });
    Adviser.update(req.params.id, adviser, function (err, adviser) {
      if (err) res.send(err);
      res.json({ error: false, message: 'Asesor actualizado satisfactoriamente', data: adviser });
    });
  }
};

exports.delete = function (req, res) {
  Adviser.delete(req.params.id, function (err, result) {
    if (err) res.send(err);
    // console.log(result);
    res.json({ error: false, message: 'Asesor eliminado' });
  });
};
