import {useSelector, useDispatch} from "react-redux";
import {cartToggle, mobileMenu} from "../actions"; 
import CartPopup from "./CartPopup";
import logo from "../images/logo.svg";
import cart from "../images/icons/icon-cart.svg";
import closeIconDark from "../images/icons/icon-close-dark.svg";
import menuIcon from "../images/icons/icon-menu.svg";
import userImage from "../images/image-avatar.png";
import "../styles/Header.scss";

function Header() {
    const cartAmount = useSelector(state => state.cart); 
    const menuOpen = useSelector(state => state.mobileMenu); 
    const dispatch = useDispatch(); 
    
    return (
        <header className="header">
            <nav className={`${menuOpen ? "active": ""}`}>
                <img className="mobile-menu" src={menuIcon} alt="mobile menu" onClick={() => dispatch(mobileMenu())}/>   
                <a href="/">
                    <img src={logo} alt="sneakers store"/>
                </a>
                <ul>
                    <li><a href="/">Collections</a></li>
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <img className={`close-mobile-menu ${menuOpen ? "active": ""}`} src={closeIconDark} alt="close mobile menu" onClick={() => dispatch(mobileMenu())} />
            </nav>

            <div className="header__user">
                <div className={`header__cart ${cartAmount >= 1 ? "active": ""}`} onClick={() => dispatch(cartToggle())}>                 
                    <img className="header__cart-image" src={cart} alt="cart" />
                    <div className="header__badge">
                        <label>{cartAmount}</label>
                    </div>
                </div>                
                <img className="header__user-image" src={userImage} alt="user avatar" />
            </div>
            <CartPopup/>
        </header>
    )
}

export default Header
