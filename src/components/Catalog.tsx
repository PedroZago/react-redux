import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import api from '../services/api';

import { IProduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';

const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products')
      .then((resp) => setCatalog(resp.data));
  }, []);

  return (
    <Box
      as="main"
    >
      <Text
        mb={5}
        fontSize="2xl"
        fontWeight="bold"
      >
        Catálogo
      </Text>

      <SimpleGrid minChildWidth="120px" spacing="40px">
        {
          catalog.map((product) => (
            <CatalogItem key={product.id} product={product} />
          ))
        }
      </SimpleGrid>
    </Box>
  );
};

export default Catalog;
