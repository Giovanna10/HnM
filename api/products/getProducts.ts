import {Product} from '../../types/responsesTypes';
import hnm from '../apiInterceptor';

export const getProducts = async (categories: string) => {
  const params = {
    country: 'it',
    lang: 'it',
    categories: categories,
  };
  const response = await hnm.get('/products/list', {params});
  const products: Product[] = response.data.results.map((product) => {
    const sizes: string[] = product.variantSizes.map(
      (size) => size.orderFilter,
    );
    return {
      code: product.defaultArticle.code,
      name: product.defaultArticle.name,
      outPrice: product.price.formattedValue,
      priceValue: product.price.value,
      image: product.defaultArticle.normalPicture[0].url,
      resizeImage: product.images[0].url,
      logo: product.defaultArticle.logoPicture[0].url,
      hexaColor: product.defaultArticle.rgbColor,
      color: product.defaultArticle.color.text,
      allHexaColors: product.rgbColors,
      allColors: product.articleColorNames,
      sizes: sizes,
      categoryName: product.categoryName,
      categoryCode: product.mainCategoryCode,
    };
  });
  return products;
};
