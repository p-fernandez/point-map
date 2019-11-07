'use strict';

const pointsInternalRepository = require('../../repositories/internal/points-internal-repository');
const {
  validatePayload,
} = require('../../applications/validators/points-validator');

const execute = async(body) => {
  validatePayload(body);

  const {id, x, y} = body;

  return pointsInternalRepository.createOne(id, x, y);
};

module.exports = execute;
