import React from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Box>
        <Link to='/cart'>
          <Icon as={FaShoppingBag} cursor='pointer' h={5} w={5} />
        </Link>
    </Box>
  )
}

export default CartWidget