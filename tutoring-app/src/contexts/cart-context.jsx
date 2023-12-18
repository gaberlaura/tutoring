import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //Search for product in cart
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem === productToAdd.id
    );
    //if found, increment its quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem + 1 }
                : cartItem
        );
    }

    //return new cart array 
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}