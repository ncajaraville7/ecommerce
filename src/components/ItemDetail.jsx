import React, { useContext, useState, useEffect } from 'react';
import { Box, Heading, Stack, Image, Text, Button } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import { doc, getDoc } from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import { firestoreFetchOne } from '../utils/firestoreFetch';

const ItemDetail = () => {
  const [viewCart, setViewCart] = useState(false);
  const [itemDetail, setItemDetail] = useState([]);
  const test = useContext(CartContext);

  const { id } = useParams();

  const onAdd = (count) => {
    console.log(`Agregaste al carrito ${count} unidades`);
    setViewCart(true);
    test.addItem(itemDetail, count);
  };

  useEffect(() => {
    firestoreFetchOne(id)
      .then((result) => setItemDetail(result))
      .catch((error) => console.log(error));
  }, []);

  console.log(itemDetail);

  return (
    <Stack direction="row" justify="center" gap={6} mt={8} key={itemDetail.id}>
      <Box>
        <Image src={itemDetail.pictureUrl} alt={itemDetail.title} h="700px" />
      </Box>
      <Stack>
        <Heading as="h4" color="#bc9341ab">
          {itemDetail.title}
        </Heading>
        <Text>{itemDetail.description}</Text>
        <Text fontWeight="bold">PRECIO: ${itemDetail.price}</Text>

        {!viewCart ? (
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <Button>Ver Carrito</Button>
          </Link>
        )}
      </Stack>
    </Stack>
  );
};

export default ItemDetail;
