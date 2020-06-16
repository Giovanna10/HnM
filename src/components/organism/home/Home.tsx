import React, {useEffect, useCallback, useState} from 'react';
import {Text, SafeAreaView, StatusBar} from 'react-native';
import {getProducts} from '../../../../api/products/getProducts';
import {
  GenresTab,
  HomeContainer,
  TabTetx,
  TabTextContainer,
  ListTitle,
} from './styles';
import ProductsList from '../../molecoles/list/ProductsList';
import {Product} from '../../../../types';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = useCallback(async () => {
    const allProducts = await getProducts('men_newarrivals');
    setProducts(allProducts);
  }, []);
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000000'}}>
      <StatusBar barStyle="light-content" />
      <HomeContainer>
        <GenresTab>
          <TabTextContainer>
            <TabTetx>WOMAN</TabTetx>
          </TabTextContainer>
          <TabTetx>|</TabTetx>
          <TabTextContainer>
            <TabTetx>MAN</TabTetx>
          </TabTextContainer>
        </GenresTab>
        <ProductsList products={products} />
      </HomeContainer>
    </SafeAreaView>
  );
};

export default Home;
