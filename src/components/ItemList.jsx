import { Stack, Container } from '@chakra-ui/react';
import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {

  return (
    <Container maxW='80%' m='0 auto !important'>
      <Stack direction='row' gap={6} wrap='wrap' justify='center'>
        {products.map( item => <Item key={item.id} {...item} />)}
      </Stack>
    </Container>
  )
}

export default ItemList