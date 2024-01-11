/*
    This component is responsible for rendering an icon that represents the shopping cart in the user interface. 
    It imports styles from the './cart-icon.styles.scss' file and utilizes SVG content from the 'shopping-bag.svg' file. 
    The component interacts with the Redux store using the 'useDispatch' and 'useSelector' hooks to manage state related to the cart.
    It displays the shopping cart icon along with a count of items in the cart. 
    It dynamically updates the item count by fetching the relevant data from the Redux store using the 'selectCartCount' selector. 
    Additionally, it tracks the status of the cart being open or closed by using the 'selectIsCartOpen' selector.
    Clicking on the cart icon triggers the 'toggleIsCartOpen' function, which dispatches an action to toggle the 'isCartOpen' state in the Redux store. 
*/

import './cart-icon.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';


const CartIcon = () => {

    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;