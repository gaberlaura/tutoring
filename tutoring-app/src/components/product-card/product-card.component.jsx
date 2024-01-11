/* 
  This component represents a card-style presentation for products. 
  It imports styles from the './product-card.styles.scss' file and utilizes the 'Button' component. 
  The component takes a 'product' prop containing information such as the product's name, price, and image URL.
  The card includes an image of the product, displaying its name and price. 
  Additionally, it features a button, provided by the 'Button' component, that triggers the 'addProductToCart' function when clicked. 
  This function dispatches a Redux action ('addItemToCart') to add the product to the shopping cart, considering the current state of the cart obtained through the 'useSelector' hook.
*/

import './product-card.styles.scss';
import Button from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
    </div>
  );
};

export default ProductCard;