'use strict';

const pointsInternalRepository = require('../../repositories/internal/points-internal-repository');
const {
  validateId,
} = require('../../applications/validators/points-validator');

const execute = async(id) => {
  validateId(id);

  return pointsInternalRepository.deleteOne(id);
};

module.exports = execute;
