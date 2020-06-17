import {Image, Text, TouchableOpacity, View} from 'react-native';

import styled from 'styled-components';

export const HomeContainer = styled(View)`
  flex: 1;
  background-color: #474747;
`;

export const TabTextContainer = styled(TouchableOpacity)`
  align-items: center;
  width: 35%;
`;

export const TabText = styled(Text)`
  color: #8f8f8f;
  font-size: 18px;
  font-weight: bold;
`;

export const LogoContainer = styled(View)`
  align-items: center;
  width: 30%;
`;

export const Logo = styled(Image)`
  width: 55;
  height: 55;
`;
