'use strict';

const {
  badGatewayError,
  badRequestError,
  conflictError,
  internalServerError,
  notFoundError,
  unauthorizedError,
} = require('../errors');

const apiError = {
  400: badRequestError,
  401: unauthorizedError,
  404: notFoundError,
  409: conflictError,
  500: internalServerError,
  502: badGatewayError,
};

const domainErrorAdapter = (error) => {
  const {
    message,
    resource,
    statusCode,
  } = error;

  const handledError = apiError[statusCode];

  if (!handledError) {
    return internalServerError(resource, message);
  }

  return handledError(resource, message);
};

module.exports = domainErrorAdapter;
