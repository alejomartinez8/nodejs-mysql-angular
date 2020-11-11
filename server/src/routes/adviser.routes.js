const express = require('express');
const router = express.Router();
const adviserController = require('../controllers/adviser.controller');
const authorize = require('../middleware/authorize');

router.get('/', authorize, adviserController.findAll);
router.post('/', authorize, adviserController.create);
router.get('/:id', authorize, adviserController.findById);
router.put('/:id', authorize, adviserController.update);
router.delete('/:id', authorize, adviserController.delete);

module.exports = router;
