'use strict';

const apiErrorAdapter = require('../adapters/api-error-adapter');

const STATUS_CODE = 409;
const NAME = 'Conflict';

const conflictError = (
  resource,
  detail,
  data
) => apiErrorAdapter(STATUS_CODE, NAME, resource, detail, data);

module.exports = conflictError;
