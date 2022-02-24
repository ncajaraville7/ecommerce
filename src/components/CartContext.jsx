import { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [ cartList, setCartList ] = useState([]);

    const addItem = (item, count) => {
        let found = cartList.find(product => product.id === item.id);
        if(found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    name: item.title,
                    image: item.pictureUrl,
                    price: item.price,
                    cant: count
            }]);
        } else {
            found.cant += count;
        }
    }

    const removeItem = (itemId) => {
        const productDelete = cartList.filter(item => item.id !== itemId );
        setCartList(productDelete);
    }
    
    return (
        <CartContext.Provider value={{cartList, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;