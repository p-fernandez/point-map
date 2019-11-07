'use strict';

const pointsInternalRepository = require('../../repositories/internal/points-internal-repository');

const execute = async() => pointsInternalRepository.fetchAll();

module.exports = execute;
