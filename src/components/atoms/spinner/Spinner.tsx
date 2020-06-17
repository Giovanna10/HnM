import {ActivityIndicator} from 'react-native';
import React from 'react';
import {SpinnerContainer} from './spinnerStyles';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <ActivityIndicator color="#cccccc" size="large" />
    </SpinnerContainer>
  );
};

export default Spinner;
