import { createContext, useState, useEffect, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //Search for product in cart
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    //if found, increment its quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    //return new cart array 
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    //Search for product in cart
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    //Check if quantity = 1, if yes remove item from cart
    if (existingCartItem.quantity === 1) {
        //if the cartitem id is not equal to the one we are trying to remove, then keep the value
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    //if it isn't, then return with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
});

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            };
        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

export const CartProvider = ({ children }) => {
    const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);

        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount } });

    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}