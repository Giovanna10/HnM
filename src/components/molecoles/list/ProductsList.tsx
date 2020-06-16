import React from 'react';
import {ListTitle, ListContainer, List} from './styles';
import {Product} from '../../../../types';
import {Image, View} from 'react-native';

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({products}) => {
  const renderProducts = (item) => (
    <View>
      <Image source={item.logo} />
    </View>
  );
  return (
    <ListContainer>
      <ListTitle>NEW ARRIVALS</ListTitle>
      <List
        data={products}
        renderItem={renderProducts}
        keyExtractor={(item) => `key-${item.code}`}
      />
    </ListContainer>
  );
};

export default ProductsList;
