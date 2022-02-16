import { Stack, Container } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import productsJSON from '../products.json';
import Item from './Item';

const ItemList = () => {

  const [ products, setProducts ] = useState([]);

    const customFetch = ( (data, error) => {
        return new Promise((resolve, reject ) => {
            setTimeout( ()=> {
                if(productsJSON) {
                    resolve(data);
                } else {
                    reject(error);
                }
            }, 2000)
        })
    })

    const getProducts = () => {
        customFetch(productsJSON, 'error')
        .then( data => setProducts(data))
        .catch( error => console.log(error))
    }

    useEffect( () => {
        getProducts()
    }, [])

  return (
    <Container maxW='80%' m='0 auto !important'>
      <Stack direction='row' gap={6} wrap='wrap' justify='center'>
        {products.map( item => <Item key={item.id} {...item} />)}
      </Stack>
    </Container>
  )
}

export default ItemList