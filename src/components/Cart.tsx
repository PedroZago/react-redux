import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Button,
} from '@chakra-ui/react';

import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';
import { formatPrice } from '../util/format';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const [loading, setLoading] = useState(false);

  const total = formatPrice(
    cart.reduce((sumTotal, item) => {
      sumTotal += (item.product.price * item.quantity);

      return sumTotal;
    }, 0),
  );

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const handleCartCheckout = () => {
    setLoading(!loading);
  };

  return (
    <Box
      as="div"
    >
      <Text
        mb={5}
        fontSize="2xl"
        fontWeight="bold"
      >
        Carrinho
      </Text>

      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Produto</Th>
              <Th isNumeric>Preço</Th>
              <Th isNumeric>Quantidade</Th>
              <Th isNumeric>Subtotal</Th>
            </Tr>
          </Thead>

          <Tbody>
            {
              cart.map((item) => (
                <Tr key={item.product.id}>
                  <Td>{item.product.title}</Td>
                  <Td isNumeric>{formatPrice(item.product.price)}</Td>
                  <Td isNumeric>{item.quantity}</Td>
                  <Td isNumeric>{formatPrice(item.product.price * item.quantity)}</Td>
                </Tr>
              ))
            }
          </Tbody>
          <Tfoot>
            <Tr>
              <Th
                colSpan={3}
                isNumeric
              >
                Total
              </Th>

              <Th
                isNumeric
              >
                {total}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <Button
        my={10}
        isLoading={loading}
        onClick={handleCartCheckout}
        loadingText="Enviando"
        type="submit"
        colorScheme="twitter"
        disabled={cart.length === 0}
      >
        Finalizar compra
      </Button>
    </Box>
  );
};

export default Cart;
