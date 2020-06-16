import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';

export const HomeContainer = styled(View)`
  flex: 1;
  background-color: #1e2834;
`;

export const GenresTab = styled(View)`
  height: 6%;
  background-color: rgba(7, 10, 13, 0.75);
  display: flex;
  flex-direction: row;
  padding: 4% 5% 0% 2%;
`;

export const TabTextContainer = styled(TouchableOpacity)`
  align-items: center;
  width: 50%;
`;

export const TabTetx = styled(Text)`
  color: #8aa0bc;
  font-size: 18px;
  font-weight: bold;
`;
