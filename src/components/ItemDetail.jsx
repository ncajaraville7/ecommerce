import React, { useContext, useState } from 'react'
import { Box, Heading, Stack, Image, Text, Button } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom'
import productsJSON from '../products.json'
import ItemCount from './ItemCount'
import { CartContext } from './CartContext';

const ItemDetail = () => {

  const [ viewCart, setViewCart ] = useState(false)
  const test = useContext(CartContext);

  const {id} = useParams();
  const filterProduct = productsJSON.filter( item => item.id === parseInt(id))

  const onAdd = (count) => {
    console.log(`Agregaste al carrito ${count} unidades`);
    setViewCart(true)
    console.log(filterProduct)
    test.addItem(...filterProduct, count);
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
            
            { !viewCart ? 
            
            <ItemCount 
            stock={5}
            initial={1}
            onAdd={onAdd}
            />

            :

            <Link to='/cart'>
              <Button>Ver Carrito</Button>
            </Link>
          }
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default ItemDetail