import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({ children }) => {

  return (
    <Stack>
      <Heading as='h1' textAlign='center' mt={4}>{children}</Heading>
      
      <ItemList />
      
    </Stack>
  )
}

export default ItemListContainer