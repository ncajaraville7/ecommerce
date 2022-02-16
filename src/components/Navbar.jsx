import React from 'react';
import { Box, Stack, Icon, Image, Text, Container } from '@chakra-ui/react';
import { FaSistrix } from "react-icons/fa";
import logo  from '../assets/logo.png';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
      <Box as='header' boxShadow='md' p={4}  >
        <Container maxWidth='90%'>
            <Stack as='nav' direction='row' justify='space-between' align='center'>
                <Image src={logo} alt='logo' w='150px'/>
                <Stack as='ul' direction='row' align='center'>
                  <Link to='/'><Text>Inicio</Text></Link>
                  <Icon as={FaSistrix} cursor='pointer' margin='0 35px !important' h={5} w={5} />
                  <CartWidget />
                </Stack>
            </Stack>
        </Container>
      </Box>
  )
}

export default Navbar