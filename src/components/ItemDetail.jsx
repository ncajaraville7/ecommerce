import { Box, Stack, Image, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ItemDetail = ({ id, description, pictureUrl, title, price}) => {
  return (
    <Stack direction='row' justify='center' gap={4}>
      <Box>
        <Image src={pictureUrl} alt={title} w='350px' h='350px' />
      </Box>
      <Stack>
        <Heading as='h3'>{title}</Heading>
        <Text>{description}</Text>
        <Text>${price}</Text>
      </Stack>
    </Stack>
  )
}

export default ItemDetail