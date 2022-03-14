import React, { useContext } from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <Box position="relative">
      <Link to="/cart">
        <Icon as={FaShoppingBag} cursor="pointer" h={5} w={5} />
      </Link>
      {test.accountant > 0 && (
        <Box
          position="absolute"
          top="-5px"
          left="10px"
          color="white"
          backgroundColor="red"
          rounded="50%"
          p="10px"
        >
          <Text lineHeight="0">{test.accountant}</Text>
        </Box>
      )}
    </Box>
  );
};

export default CartWidget;
