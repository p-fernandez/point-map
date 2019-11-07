'use strict';

const {
  BadGatewayError,
  ConflictError,
  NotFoundError,
  InternalServerError,
} = require('../../errors');

const RESOURCE = 'Files';

const filesErrors = {
  ENOENT: NotFoundError,
};

const filesErrorsByName = {
  ConflictError,
  NotFoundError,
  SyntaxError: BadGatewayError,
};

const filesErrorAdapter = (err) => {
  const {
    code,
    name,
    message,
  } = err;

  const ReceivedError = filesErrors[code] || filesErrorsByName[name];

  if (!ReceivedError) {
    throw new InternalServerError(message, RESOURCE);
  }

  throw new ReceivedError(message, RESOURCE);
};

module.exports = filesErrorAdapter;
