import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Genres: {title: string};
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type GenreScreenRouteProp = RouteProp<RootStackParamList, 'Genres'>;

export type GenreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Genres'
>;

export interface HomeScreenProps {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
}

export interface GenreScreenProps {
  route: GenreScreenRouteProp;
  navigation: GenreScreenNavigationProp;
}
