import React, { useEffect, useState } from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import productsJSON from '../products.json'
import customFetch from '../utils/customFetch';
import ItemList from './ItemList';

const ItemListContainer = ({ children }) => {

  const [ products, setProducts ] = useState([]);
  const {categoryId} = useParams();

    useEffect( () => {
      if(categoryId === undefined) {
        customFetch(2000, productsJSON)
        .then( data => setProducts(data))
        .catch( error => console.log(error))
      } else {
        customFetch(2000, productsJSON.filter(item => item.category === parseInt(categoryId)))
        .then( data => setProducts(data))
        .catch( error => console.log(error))
      }
      
    }, [categoryId])

  return (
    <Stack>
      <Heading as='h1' textAlign='center' mt={4}>{children}</Heading>
      
      <ItemList products={products} />
    </Stack>
  )
}

export default ItemListContainer