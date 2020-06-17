import {
  GenreScreenNavigationProp,
  HomeScreenNavigationProp,
} from '../../../../types/navigatorTypes';
import {HomeContainer, Logo, LogoContainer} from './homeStyles';
import React, {useCallback, useEffect, useState} from 'react';
import {TabText, TabTextContainer} from './homeStyles';

import {Product} from '../../../../types/responsesTypes';
import ProductsList from '../../molecoles/list/ProductsList';
import ScreenHeader from '../../atoms/screenHeader/ScreenHeader';
import Spinner from '../../atoms/spinner/Spinner';
import {getProducts} from '../../../../api/products/getProducts';
import logo from '../../../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation:
    | HomeScreenNavigationProp
    | GenreScreenNavigationProp = useNavigation();

  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [evidenceProducts, setEvidenceProducts] = useState<Product[]>([]);

  const getNewProducts = useCallback(async () => {
    const newMenProducts = await getProducts('men_newarrivals');
    const newWomenProducts = await getProducts('ladies_newarrivals');

    const newArrivals = newMenProducts.concat(newWomenProducts);

    setNewProducts(newArrivals);
  }, []);

  const getInEvidenceProducts = useCallback(async () => {
    const menInEvidenceProducts = await getProducts('men_premiumquality');
    const womenInEvidenceProducts = await getProducts(
      'ladies_divided_trending_now',
    );

    const inEvidence = menInEvidenceProducts.concat(womenInEvidenceProducts);

    setEvidenceProducts(inEvidence);
  }, []);

  useEffect(() => {
    getNewProducts();
    getInEvidenceProducts();
  }, [getNewProducts, getInEvidenceProducts]);

  const Lists = () => (
    <>
      {newProducts.length !== 0 && evidenceProducts.length !== 0 ? (
        <>
          <ProductsList products={newProducts} listTitle="NEW ARRIVAL" />
          <ProductsList products={evidenceProducts} listTitle="IN EVIDENCE" />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );

  return (
    <HomeContainer>
      <ScreenHeader>
        <TabTextContainer
          onPress={() => navigation.navigate('Genres', {title: 'Woman'})}>
          <TabText>WOMAN</TabText>
        </TabTextContainer>
        <LogoContainer>
          <Logo source={logo} resizeMode="contain" />
        </LogoContainer>
        <TabTextContainer
          onPress={() => navigation.navigate('Genres', {title: 'Man'})}>
          <TabText>MAN</TabText>
        </TabTextContainer>
      </ScreenHeader>
      <Lists />
    </HomeContainer>
  );
};

export default Home;
