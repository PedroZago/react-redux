import React, { useCallback } from 'react';
import {
  Box, Button, Image, Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { addProductToCartRequest } from '../store/modules/cart/actions';

import { IProduct } from '../store/modules/cart/types';
import { IState } from '../store';
import { formatPrice } from '../util/format';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(
    (state) => state.cart.failedStockCheck.includes(product.id),
  );

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src="https://picsum.photos/536/354"
        alt="https://picsum.photos/536/354"
      />

      <Box p="3">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {product.title}
        </Box>

        <Box>{formatPrice(product.price)}</Box>
      </Box>

      <Box
        display="flex"
        mb="2"
        mx="2"
        alignItems="center"
        flexDirection="column"
        gap={3}
      >
        <Button
          onClick={handleAddProductToCart}
          type="button"
          width="100%"
        >
          Comprar
        </Button>

        {hasFailedStockCheck && (
          <Text
            color="red"
          >
            Falta de estoque
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default CatalogItem;
