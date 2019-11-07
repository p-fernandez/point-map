'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const filesErrorAdapter = require('../../../../interfaces/adapters/files/files-error-adapter');
const ConflictError = require('../../../../interfaces/errors/conflict-error');
const NotFoundError = require('../../../../interfaces/errors/not-found-error');


const ENCODING = 'utf-8';
const FILE_PATH = 'points-file.json';
const FILE_URI = path.join(__dirname, FILE_PATH); 

const readFromFile = async() => readFile(FILE_URI, { encoding: ENCODING });

const writeFromFile = async(data) => writeFile(FILE_URI, data);

const fetchAll = async() => {
  try {
    const result = await readFromFile();
    const { points } = JSON.parse(result);
    return points;
  } catch (err) {
    throw filesErrorAdapter(err);
  }
};

const fetchOne = async(id) => {
  const result = await readFromFile();
  const { points } = JSON.parse(result);
  return points.find(point => point.id === id);
}

const update = async(points) => {
  const json = JSON.stringify({ points });
  await writeFromFile(json);
}

const createOne = async(id, x, y) => {
  try {
    const pointExists = await fetchOne(id);
    if (pointExists) {
      throw new ConflictError('Point already exists');
    }

    const points = await fetchAll();
    const pointsUpdated = [...points, { id, x, y }];
    await update(pointsUpdated);

    return {id, x, y};
  } catch (err) {
    throw filesErrorAdapter(err);
  }
};

const deleteOne = async(id) => {
  try {
    const pointExists = await fetchOne(id);
    if (!pointExists) {
      throw new NotFoundError('Point doest not exist');
    }

    const points = await fetchAll();
    const pointsUpdated = points.filter(point => point.id !== id);
    await update(pointsUpdated);

    return null;
  } catch (err) {
    throw filesErrorAdapter(err);
  }
};


module.exports = {
  createOne,
  deleteOne,
  fetchAll,
};
