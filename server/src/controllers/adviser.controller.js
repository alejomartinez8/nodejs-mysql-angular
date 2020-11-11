'use strict';

const Adviser = require('../models/adviser.model');

exports.create = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Enviar todos los campos requeridos' });
  } else {
    Adviser.create(new Adviser(req.body), function (err, adviser) {
      if (err) res.send(err);
      res.json({ error: false, message: 'Asesor agregado satisfactoriamente', data: adviser });
    });
  }
};

exports.findAll = function (req, res) {
  Adviser.findAll(function (err, advisers) {
    console.log('controler findAll');
    if (err) res.send(err);

    console.log('res', advisers);
    res.send(advisers);
  });
};

exports.findById = function (req, res) {
  Adviser.findById(req.params.id, function (err, adviser) {
    if (err) res.send(err);
    console.log('res', adviser);
    res.send(adviser);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Enviar todos los campos requeridos' });
  } else {
    Adviser.update(req.params.id, new Adviser(req.body), function (err, adviser) {
      if (err) res.send(err);
      res.json({ error: false, message: 'Asesor actualizado satisfactoriamente', data: adviser });
    });
  }
};

exports.delete = function (req, res) {
  Adviser.delete(req.params.id, function (err, adviser) {
    if (err) res.send(err);
    res.json({ error: false, message: 'Asesor eliminado' });
  });
};
