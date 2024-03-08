/*
    This component is responsible for rendering each individual item within the checkout page or cart summary. 
    It imports styles from the './checkout-item.styles.scss' file. 
    It takes a 'cartItem' prop, containing information about the specific item, such as its name, image URL, price, and quantity.
    And visually represents the checkout item with a container that includes the item's image, name, quantity with increment & decrement buttons, price, and a button to remove the item from the cart. 
    It interacts with the Redux store using the 'useSelector' and 'useDispatch' hooks to manage the state and dispatch actions related to cart manipulation.
    The increment, decrement, and remove buttons trigger corresponding actions dispatched to the Redux store, updating the cart's state based on user interactions.
*/

import React from 'react';
import './checkout-item.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

interface CheckoutItemProps {
  cartItem: {
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
