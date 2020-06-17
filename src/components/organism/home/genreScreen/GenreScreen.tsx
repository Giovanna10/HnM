import {Button, Text, View} from 'react-native';

import {GenreScreenProps} from '../../../../../types/navigatorTypes';
import React from 'react';
import ScreenHeader from '../../../atoms/screenHeader/ScreenHeader';

const GenreScreen: React.FC<GenreScreenProps> = ({route, navigation}) => {
  const title = route.params?.title !== undefined ? route.params.title : '';

  return (
    <View style={{flex: 1}}>
      <ScreenHeader>
        <Text>{title}</Text>
      </ScreenHeader>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default GenreScreen;
