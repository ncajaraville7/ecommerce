import React, { useEffect, useState } from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import db from '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({ children }) => {

  const [ products, setProducts ] = useState([]);
  const {categoryId} = useParams();

    useEffect( () => {
      const firestoreFetch = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        return querySnapshot.docs.map( document => ({
          id: document.id,
          ...document.data()
        }))
      }
      firestoreFetch()
        .then(data => setProducts(data))
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