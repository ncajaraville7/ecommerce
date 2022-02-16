import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import ItemCount from './ItemCount';
// import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = ({ children }) => {

  const getStatus = (count) => {
    console.log('Este es el estado del ItemCount:', count);
  }

  return (
    <Stack>
      {/* <Heading as='h1' textAlign='center' mt={4}>{children}</Heading> */}
      
      {/* <ItemList /> */}
      <ItemDetailContainer />
      <ItemCount 
        stock={5}
        initial={1}
        onAdd={getStatus}
        />
    </Stack>
  )
}

export default ItemListContainer