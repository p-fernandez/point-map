const adaptPoint = (point) => {
  const { id, attributes } = point;
  const { x, y } = attributes;
  return { id, x, y };
};

const apiResponseAdapter = (response) => {
  const { data } = response;
  return data.map(adaptPoint);
};

export default apiResponseAdapter;
