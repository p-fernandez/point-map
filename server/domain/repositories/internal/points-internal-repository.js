'use strict';

const filesDataStore = require('./data-stores/files/points.js');

const createOne = async(id, x, y) => filesDataStore.createOne(id, x, y);

const deleteOne = async(id) => filesDataStore.deleteOne(id);

const fetchAll = async() => filesDataStore.fetchAll();


module.exports = {
  createOne,
  deleteOne,
  fetchAll,
};
