import React from 'react'
import { Box, Heading, Stack, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom'
import productsJSON from '../products.json'
import ItemCount from './ItemCount'

const ItemDetail = () => {

  const {id} = useParams();
  const filterProduct = productsJSON.filter( item => item.id === parseInt(id))

  const getStatus = (count) => {
    console.log(`Agregaste al carrito ${count} unidades`);
  }

  return (
    <>
      { filterProduct.map( product => (
        <Stack direction='row' justify='center' gap={6} mt={8} key={product.id} >
          <Box>
            <Image src={"../" + product.pictureUrl} alt={product.title} h='700px' />
          </Box>
          <Stack>
            <Heading as='h4' color='#bc9341ab'>{product.title}</Heading>
            <Text>{product.description}</Text>
            <Text fontWeight='bold'>PRECIO: ${product.price}</Text>
            <ItemCount 
              stock={5}
              initial={1}
              onAdd={getStatus}
            />
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default ItemDetail