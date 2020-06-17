import {
  ImageComponent,
  List,
  ListContainer,
  ListItemContainer,
  ListTitle,
  ListTitleContainer,
} from './listStyles';
import {ListRenderItem, ScrollView, StyleSheet} from 'react-native';

import {Product} from '../../../../types/responsesTypes';
import React from 'react';

interface ProductsListProps {
  listTitle: string;
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({listTitle, products}) => {
  const numCol = products.length / 2;

  const renderProducts: ListRenderItem<Product> = ({item}) => (
    <ListItemContainer>
      <ImageComponent source={{uri: item.logo}} />
    </ListItemContainer>
  );
  return (
    <ListContainer>
      <ListTitleContainer>
        <ListTitle>{listTitle}</ListTitle>
      </ListTitleContainer>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatlistContainer}>
        <List
          data={products}
          renderItem={renderProducts}
          keyExtractor={(item) => `key-${item.code}`}
          contentContainerStyle={styles.contentContainer}
          numColumns={numCol}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </ListContainer>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    backgroundColor: 'rgba(153, 153, 153, 0.75)',
    maxHeight: 300,
  },
  contentContainer: {
    paddingLeft: 20,
    paddingBottom: 30,
  },
});

export default ProductsList;
