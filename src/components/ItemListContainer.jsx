import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({ children }) => {

  const getStatus = (count) => {
    console.log('Este es el estado del ItemCount:', count);
  }

  return (
    <Stack>
      <Heading as='h1' textAlign='center' mt={4}>{children}</Heading>
      <ItemCount 
        stock={5}
        initial={1}
        onAdd={getStatus}
        />
      <ItemList />
    </Stack>
  )
}

export default ItemListContainer