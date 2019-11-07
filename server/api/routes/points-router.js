'use strict';

const express = require('express');

const pointsController = require('../controllers/points-controller');

const router = express.Router();

router.get('/', pointsController.fetchAll);
router.post('/', pointsController.createOne);
router.delete('/:pointId', pointsController.deleteOne);

module.exports = router;
