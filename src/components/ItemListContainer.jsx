import React, { useEffect, useState } from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = ({ children }) => {

  const [ products, setProducts ] = useState([]);
  const {categoryId} = useParams();

    useEffect( () => {
      firestoreFetch(categoryId)
        .then(result => setProducts(result))
        .catch(error => console.log(error))
    }, [categoryId])

  return (
    <Stack>
      <Heading as='h1' textAlign='center' mt={4}>{children}</Heading>
      
      <ItemList products={products} />
    </Stack>
  )
}

export default ItemListContainer