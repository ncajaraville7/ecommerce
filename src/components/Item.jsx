import { Box, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Item = ({ title, pictureUrl, price}) => {
  return (
    <Stack p={4}>
      <Box maxW='150px'>
        <Image src={pictureUrl} alt={title} w='100%' h='150px' />
      </Box>
      <Stack>
        <Text>{title}</Text>
        <Text fontWeight='bold'>${price}</Text>
      </Stack>
    </Stack>
  )
}

export default Item