import {FlatList, Image, Text, View} from 'react-native';

import {Product} from '../../../../types/responsesTypes';
import styled from 'styled-components';

export const ListContainer = styled(View)`
  flex: 1;
`;

export const ListTitleContainer = styled(View)`
  padding-left: 5%;
  align-items: center;
  margin: 4% 0%;
`;

export const ListTitle = styled(Text)`
  font-size: 25px;
  color: #cccccc;
`;

export const List = styled(FlatList as new () => FlatList<Product>)`
  margin: 20px 0px;
`;

export const ListItemContainer = styled(View)`
  margin: 20px 10px 0px 10px;
  border-radius: 4px;
`;

export const ImageComponent = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 4px;
`;
