import React from 'react';
import styled from 'styled-components';

const Detail = styled.div`
  color: white;
  font-size: 10rem;
  font-style: italic;
  font-weight: bold;
`;

const Screen = styled.div`
  border: 20px solid white;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ErrorScreen = () => (
  <Screen>
    <Detail>
      Loading ...
    </Detail>
  </Screen>
);

export default ErrorScreen;
