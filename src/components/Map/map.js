import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Pins from 'components/Pins';
import {
  deletePoint,
  fetchPoints,
  setPoint,
} from 'reducers/points-reducer';
import map from './map.png';

const MapContainer = styled.div`
  background: no-repeat url('.${props => props.image}') 50% / 100%;
  position: relative;
`;

const ImageContainer = styled.img`
  vertical-align: top;
  width: 100%;
  opacity: 0;
`;

const createId = (x, y) => `x${x}y${y}`;

const calculateCoordsInsideElement = (element, clientX, clientY) => {
  const { left, top } = element.getBoundingClientRect();
  const x = clientX - left;
  const y = clientY - top;

  return {
    x,
    y
  };
}

const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading,
  pins: state.pins,
});

const mapDispatchToProps = dispatch => ({
  deletePoint: id => dispatch(deletePoint(id)),
  fetchPoints: () => dispatch(fetchPoints()),
  setPoint: data => dispatch(setPoint(data)),
});

class Map extends Component {
  constructor(props) {
    super(props);

    this.ref = null;
  }

  componentDidMount() {
    this.props.fetchPoints();
    this.ref.addEventListener('click', this.onClick);
    this.ref.addEventListener('dblclick', this.blockDoubleClick);
  }

  componentWillUnmount() {
    this.ref.removeEventListener('click', this.onClick);
    this.ref.removeEventListener('dblclick', this.blockDoubleClick);
  }

  setRef = ref => {
    this.ref = ref;
  };

  blockDoubleClick = (e) => e.preventDefault();

  onClick = (e) => {
    e.preventDefault();
    
    const { x, y } = calculateCoordsInsideElement(this.ref, e.clientX, e.clientY);
    const data = {
      id: createId(x, y),
      x,
      y,
    };
    this.props.setPoint(data);
  };

  onDelete = (e, id) => {
    e.preventDefault();
    this.props.deletePoint(id);
  };

  render() {
    const { error, pins } = this.props;

    return (
      <MapContainer image={map} >
        <ImageContainer ref={this.setRef} alt='map' src={map} />
        <Pins pins={pins} error={error} onDelete={this.onDelete} />
      </MapContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
