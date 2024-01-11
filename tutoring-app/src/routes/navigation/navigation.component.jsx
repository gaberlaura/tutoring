import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
    //useSelector takes in a function that is responsible for extracting info from the Redux store
    const currentUser = useSelector(selectCurrentUser);

    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img className='logo-img' src='./logo-hands.jpg' />
                </Link>
                <h1 className="site-title">Shared Vision Tutoring</h1>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/about'>
                        About
                    </Link>
                    <Link className="nav-link" to='/contact'>
                        Contact
                    </Link>
                    {/* <Link className="nav-link" to='/blog'>
                        Blog
                    </Link> */}
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    {
                        currentUser ?
                            (<div>
                                <Link className="nav-link" to='/appointments'>Appointments</Link>
                                <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                            </div>)
                            :
                            (<Link className="nav-link" to='/auth'> Sign In </Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;