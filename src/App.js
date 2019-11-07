import React from 'react';
import styled from 'styled-components';

import {
  Map,
} from 'components';
const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const App = () => {
  return (
    <AppContainer className="appContainer">
      <Map />
    </AppContainer>
  );
}

export default App;
