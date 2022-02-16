import React, { useState } from 'react'
import { Box, Button, Stack, Text } from '@chakra-ui/react';

const ItemCount = ({ stock, initial, onAdd }) => {

  const [ count, setCount ] = useState(initial);

  const add = () => {
    const addCount = count + 1;

    if(count >= stock) {
      setCount(stock)
      return;
    }

    setCount(addCount)
  }

  const subtract = () => {
    const subtractCount = count - 1;

    if(count <= initial) {
      setCount(initial)
      return
    }
    setCount(subtractCount)
  }

  return (
    <Stack direction='column' justify='center' align='center'>
      <Stack direction='row' justify='center' align='center'>
        <Button type='button' onClick={subtract}> - </Button>
        <Text>{count}</Text>
        <Button type='button' onClick={add}> + </Button>
      </Stack>
      <Box>
        <Button type='button' onClick={ ()=> onAdd(count) }>Agregar al carrito</Button>
      </Box>
    </Stack>
  )
}

export default ItemCount