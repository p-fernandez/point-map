'use strict';

const {
  createOneCommand,
  deleteOneCommand,
  fetchAllCommand,
} = require('../../domain/use-cases/points');
const {
  domainErrorAdapter,
  errorResponseAdapter,
} = require('../interfaces/adapters');
const pointResponseAdapter = require('../interfaces/adapters/points/point-response-adapter');
const pointsResponseAdapter = require('../interfaces/adapters/points/points-response-adapter');

async function createOne(req, res) {
  try {
    const {
      body,
    } = req;

    const responseData = await createOneCommand(body);

    return res.status(201).json(pointResponseAdapter(responseData));
  } catch (error) {
    return errorResponseAdapter(res, domainErrorAdapter(error));
  }
}

async function deleteOne(req, res) {
  try {
    const {
      params: {
        pointId,
      },
    } = req;

    await deleteOneCommand(req.sanitize(pointId));

    return res.status(204).json();
  } catch (error) {
    return errorResponseAdapter(res, domainErrorAdapter(error));
  }
}

async function fetchAll(req, res) {
  try {
    const responseData = await fetchAllCommand();

    return res.status(200).json(pointsResponseAdapter(responseData));
  } catch (error) {
    return errorResponseAdapter(res, domainErrorAdapter(error));
  }
}

module.exports = {
  createOne,
  deleteOne,
  fetchAll,
};
