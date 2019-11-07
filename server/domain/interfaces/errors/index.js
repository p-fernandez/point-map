'use strict';

const BadGatewayError = require('./bad-gateway-error');
const BadRequestError = require('./bad-request-error');
const ConflictError = require('./conflict-error');
const InternalServerError = require('./internal-server-error');
const NotFoundError = require('./not-found-error');
const UnauthorizedError = require('./unauthorized-error');

module.exports = {
  BadGatewayError,
  BadRequestError,
  ConflictError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
};
