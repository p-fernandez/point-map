'use strict';

const pointsRouter = require('./points-router');

const ROUTE_CONTEXT = '/api';

const routes = (app) => {
  app.use(`${ROUTE_CONTEXT}/points`, pointsRouter);
};

module.exports = routes;
