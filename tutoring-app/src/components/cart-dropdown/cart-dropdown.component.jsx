import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/user.context";
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    const navigateToAuth = () => {
        navigate('/auth');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            {/* {
                currentUser ?
                    (<Button onClick={goToCheckoutHandler}>Check out</Button>)
                    :
                    (<Button onClick={navigateToAuth}>Check out</Button>)
            } */}
            <Button onClick={goToCheckoutHandler}>Check out</Button>
        </div>
    )
}

export default CartDropDown;