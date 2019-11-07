'use strict';

class ConflictError extends Error {
  constructor(message, resource) {
    super();
    this.name = 'ConflictError';
    this.message = message || 'Conflict error';
    this.resource = resource || 'Undefined';
    this.stack = (new Error()).stack;
    this.statusCode = 409;
  }
}

module.exports = ConflictError;
