import React, { useState, useEffect } from 'react';
import { Stack } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'
import productsJSON from '../products.json';

const ItemDetailContainer = () => {

  const [ product, setProduct ] = useState([]);

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

    const getItem = () => {
        customFetch(productsJSON, 'error')
        .then( data => setProduct(data[1]))
        .catch( error => console.log(error))
    }

    useEffect( () => {
        getItem()
    }, [])

  return (
    <Stack mt={12}>
         <ItemDetail {...product}/>
    </Stack>
  )
}

export default ItemDetailContainer