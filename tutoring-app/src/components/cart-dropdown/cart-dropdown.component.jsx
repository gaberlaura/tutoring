/*
    This component is responsible for rendering a dropdown container that displays the items added to the shopping cart. 
    It imports styles from the './cart-dropdown.styles.scss' file.
    The component utilizes the 'Button' component for the checkout button and the 'CartItem' component to render individual items within the cart.
    It uses React hooks and Redux to manage state and access the current user's information. 
    It retrieves the cart items from the Redux store using the 'useSelector' hook and determines the current user's authentication status from the 'UserContext.' 
    The 'useNavigate' hook from 'react-router-dom' is employed to handle navigation within the application.
    The rendered dropdown includes a list of cart items fetched from the store, each represented by the 'CartItem' component. 
    Additionally, it dynamically renders a checkout button based on the user's authentication status. 
    If a user is authenticated ('currentUser' is truthy), the button triggers a function to navigate to the '/checkout' route. 
    If the user is not authenticated, clicking the button will navigate to the '/auth' route, prompting the user to log in or sign up.
*/

import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCurrentUser } from "../../store/user/user.selector";

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    const navigateToAuth = () => {
        navigate('/auth');
    }

    console.log('current user?', currentUser);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            {
                currentUser ?
                    (<Button onClick={goToCheckoutHandler}>Check out</Button>)
                    :
                    (<Button onClick={navigateToAuth}>Check out</Button>)
            }
        </div>
    )
}

export default CartDropDown;