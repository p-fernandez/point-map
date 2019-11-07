'use strict';

const badGatewayError = require('./bad-gateway-error');
const badRequestError = require('./bad-request-error');
const conflictError = require('./conflict-error');
const internalServerError = require('./internal-server-error');
const methodNotAllowedError = require('./method-not-allowed-error');
const notFoundError = require('./not-found-error');
const unauthorizedError = require('./unauthorized-error');

module.exports = {
  badGatewayError,
  badRequestError,
  conflictError,
  internalServerError,
  methodNotAllowedError,
  notFoundError,
  unauthorizedError,
};
