import { Button, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'

const CartDetail = () => {

  const test = useContext(CartContext);
  const totalCost = test.cartList.reduce( (total, item) => item.price + total, 0);

  return (
    <Stack>
      {
        test.cartList.length > 0 ?

        test.cartList.map( item => (
          <Container maxW='90%' key={item.id}>
            <Stack direction='row' mt={8} gap={6}>
              <Image src={item.image} alt={item.name} maxW='150px'/>
              <Stack>
                <Stack direction='row'>
                  <Text>Nombre del producto:</Text>
                  <Text fontWeight='bold'>{item.name}</Text>
                </Stack>
                <Stack direction='row'>
                  <Text>Cantidad:</Text>
                  <Text fontWeight='bold'>{item.cant}</Text>
                </Stack>
                <Stack direction='row'>
                  <Text>Precio:</Text>
                  <Text fontWeight='bold'>${item.price}</Text>
                </Stack>
                <Button type='button' onClick={()=> test.removeItem(item.id)}>Eliminar Producto</Button>
              </Stack>
            </Stack>
          </Container>
        ))

        :

        <Stack>
          <Heading textAlign='center' mt={8}>No hay productos en el carrito</Heading>
          <Button maxW='10%' margin='2rem auto !important'>
            <Link to='/'>Volver al inicio</Link>
          </Button>
        </Stack>
      }

      {
        test.cartList.length > 0 && 
        <Container maxW='90%'>
          <Stack direction='row' mt='2rem !important' align='center'>
            <Heading as='h4'>Total:</Heading>
            <Text fontSize='28px'>${totalCost}</Text>
          </Stack>
        </Container>
      }
      
    </Stack>
  )
}

export default CartDetail