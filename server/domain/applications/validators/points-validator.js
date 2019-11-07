'use strict';

const Joi = require('@hapi/joi');

const BadRequestError = require('../../interfaces/errors/bad-request-error');

const RESOURCE = 'points-validator';

const regex = /^x\d{1,}y\d{1,}$/;
const schemaId = Joi.object({
  id: Joi.string().regex(regex).required(),
});

const schemaPayload = Joi.object({
  id: Joi.string().regex(regex).required(),
  x: Joi.number().required(),
  y: Joi.number().required(),
});

const errorThrower = (error) => {
  if (error) {
    const { message } = error;
    throw new BadRequestError(message, RESOURCE);
  }
};

const validateId = (id) => {
  const { error } = schemaId.validate({ id });
  errorThrower(error);
};

const validatePayload = (payload) => {
  const { error } = schemaPayload.validate(payload);
  errorThrower(error);
};

module.exports = {
  validateId,
  validatePayload,
};
