import { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [ cartList, setCartList ] = useState([]);
    const [ accountant, setAccountant] = useState(0);

    const addItem = (item, count) => {
        let found = cartList.find(product => product.id === item.id);
        if(found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    name: item.title,
                    image: item.pictureUrl,
                    price: item.price * count,
                    cant: count
            }]);
            setAccountant(accountant + 1);
        } else {
            found.cant += count;
        }
    }

    const removeItem = (itemId) => {
        const productDelete = cartList.filter(item => item.id !== itemId );
        setCartList(productDelete);
        setAccountant(accountant - 1);
    }
    
    return (
        <CartContext.Provider value={{cartList, setCartList, addItem, removeItem, accountant, setAccountant}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;