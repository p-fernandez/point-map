'use strict';

const createApiResponseItem = (type, id, attributes) => ({
  type,
  id,
  ...(attributes && Object.keys(attributes).length > 0 && { attributes }),
});

module.exports = createApiResponseItem;
