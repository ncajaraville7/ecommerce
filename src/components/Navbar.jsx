import React from 'react';
import { Box, Stack, Image, Text, Container } from '@chakra-ui/react';
import logo  from '../assets/logo.png';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {

  return (
      <Box as='header' boxShadow='md' p={4}  >
        <Container maxWidth='90%'>
            <Stack as='nav' direction='row' justify='space-between' align='center'>
                <Image src={logo} alt='logo' w='150px'/>
                <Stack direction='row'>
                  <Link to='/category/2'>
                    <Text mr='30px'>Tortas</Text>
                  </Link>
                  <Link to='/category/3'>
                    <Text mr='30px'>Box</Text>
                  </Link>
                  <Link to='/category/1'>
                    <Text mr='30px'>Pan Dulce</Text>
                  </Link>
                </Stack>
                <Stack as='ul' direction='row' align='center'>
                  <Link to='/'><Text mr='30px'>Inicio</Text></Link>
                  <CartWidget />
                </Stack>
            </Stack>
        </Container>
      </Box>
  )
}

export default Navbar