import React from 'react';

import {
  ErrorScreen,
  Loading,
  Point,
} from 'components';


const Pins = (props) => {
  const { onDelete, pins, isLoading, error } = props;
  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      {
        pins
        && pins.length > 0
        && pins.map(({ id, x, y }) => (
          <Point key={id} id={id} x={x} y={y} onDelete={onDelete} />)
        )
      }
      {error && <ErrorScreen error={error} />}
    </div>
  );
};

export default Pins;
