import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import products from '../store/products';
import ProductItem from './ProductItem';
import { Container, Wrap, WrapItem } from '@chakra-ui/react';

const Products = observer(() => {
  useEffect(() => {
    products.fetchProducts();
  }, []);

  return (
    <Container maxW='6xl'>
      <Wrap
        justify='center'
        m='1em 0'
      >
        {products.products.map((item) => {
          return (
            <WrapItem key={item.id}>
              <ProductItem item={item} />
            </WrapItem>
          );
        })}
      </Wrap>
    </Container>
  );
});

export default Products;
