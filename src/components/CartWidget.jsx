import React from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { FaShoppingBag } from "react-icons/fa";

const CartWidget = () => {
  return (
    <Box>
        <Icon as={FaShoppingBag} cursor='pointer' h={5} w={5} />
    </Box>
  )
}

export default CartWidget