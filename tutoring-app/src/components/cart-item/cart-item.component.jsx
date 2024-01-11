/*
  This component is responsible for rendering each individual item within the shopping cart. 
  It imports styles from the './cart-item.styles.scss' file. 
  It takes a 'cartItem' prop, which contains information about the specific item, such as its image, price, name, and quantity.
  And then visually represents the cart item with an image, and adjacent to it, displays the item's details including its name, quantity, and the total price for the specified quantity. 
*/

import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
