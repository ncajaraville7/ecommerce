import React from 'react'
import { Box, Stack, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ id, title, pictureUrl, price}) => {
  return (
    <Link to={"/products/" + id}>
      <Stack p={4}>
        <Box>
          <Image src={pictureUrl} alt={title} w='265px' h='280px' />
        </Box>
        <Stack direction='row' justify='space-between' align='center' m='0 !important' backgroundColor='#bc9341ab' p={3}> 
          <Text>{title}</Text>
          <Text fontWeight='bold'>${price}</Text>
        </Stack>
      </Stack>
    </Link>
  )
}

export default Item