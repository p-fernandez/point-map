import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  background-color: red;
  border: 1px solid black;
  border-radius: 50%;
  height: 10px;
  left: ${props => props.x - 5 }px;
  position: absolute;
  top: ${props => props.y - 5 }px;
  width: 10px;

  :hover {
    background-color: white;
    border: 1px solid black;
		cursor: pointer;
    z-index: 9999;
	}
`;

const Point = ({ id, x, y, onDelete }) => (
  <Circle key={id}
    x={x}
    y={y}
    onClick={(e) => onDelete(e, id)}
  />
);

export default Point;
