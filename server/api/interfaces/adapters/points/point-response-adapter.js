'use strict';

const apiResponseItem = require('../api-response-item-adapter');

const ENTITY = 'points';

const pointResponseAdapter = (point) => {
  const {
    id,
    ...attributes
  } = point;

  return apiResponseItem(ENTITY, id, attributes);
};

module.exports = pointResponseAdapter;
