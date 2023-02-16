import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Flex, Divider } from '@chakra-ui/react';

import Cart from './components/Cart';
import Catalog from './components/Catalog';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Flex
        direction="column"
        h="100vh"
      >
        <Flex w="100%" my="6" maxWidth={1100} mx="auto" px="6" flexDir="column">
          <Catalog />

          <Divider
            orientation="horizontal"
            my={10}
          />

          <Cart />
        </Flex>
      </Flex>
    </Provider>
  );
}

export default App;
