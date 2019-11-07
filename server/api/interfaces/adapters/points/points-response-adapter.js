'use strict';

/**
 * This looks overkill but with a factory pattern this would a single function
 * to apply the appropriate adapter to any desired entity
 * EntityAdapter = (entities) => apiResponse(entities.map(entityAdapter))
 */
const pointResponseAdapter = require('./point-response-adapter');

const apiResponse = require('../api-response-adapter');

const pointsResponseAdapter = (points) => apiResponse(points.map(pointResponseAdapter));

module.exports = pointsResponseAdapter;
