import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-context";
import './navigation.styles.scss';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    {/* <CrwnLogo className='logo' /> */}
                    <img className='logo-img' src='./logo-hands.jpg'/>
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
                    <CartIcon/>
                </div>
                { isCartOpen && <CartDropDown/>} 
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;