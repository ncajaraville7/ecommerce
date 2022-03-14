import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [accountant, setAccountant] = useState(0);

  const addItem = (item, count) => {
    let found = cartList.find((product) => product.id === item.id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          id: item.id,
          name: item.title,
          image: item.pictureUrl,
          price: item.price,
          cant: count,
        },
      ]);
      setAccountant(accountant + 1);
    } else {
      found.cant += count;
    }
  };

  const removeItem = (itemId) => {
    const productDelete = cartList.filter((item) => item.id !== itemId);
    setCartList(productDelete);
    setAccountant(accountant - 1);
  };

  const calcPriceItem = (id) => {
    let index = cartList.map((item) => item.id).indexOf(id);
    return cartList[index].price * cartList[index].cant;
  };

  const calcTotal = () => {
    let totalPerItem = cartList.map((item) => calcPriceItem(item.id));
    return totalPerItem.reduce(
      (previusValue, currentValue) => previusValue + currentValue,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addItem,
        removeItem,
        accountant,
        setAccountant,
        calcPriceItem,
        calcTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
