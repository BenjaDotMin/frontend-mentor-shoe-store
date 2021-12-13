import {useSelector, useDispatch} from "react-redux";
import {emptyCart} from "../actions"; 
import productImage from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icons/icon-delete.svg";
import "../styles/CartPopup.scss";

function CartPopup() {
    const openCart = useSelector(state => state.cartPopup); 
    const cartAmount = useSelector(state => state.cart); 
    const dispatch = useDispatch(); 

    return (
        <div className={`cart-popup ${openCart ? "active" : ""}`}>
            <div className="cart-popup__header">
                <label>Cart</label>
            </div>
            <div className={`cart-popup__body ${cartAmount ? "--has-product" : ""}`}>
                <div className="cart-popup__product">
                   <img src={productImage} alt="fall limited edition sneakers" />
                   <div className="cart-popup__product-details">
                       <p>Fall Limited Edition Sneakers</p>
                       <span>&#36;125.00 x {cartAmount} <b>&#36;{125*cartAmount}.00</b></span>
                   </div>
                   <img className="delete-product" src={deleteIcon} alt="remove product" onClick={() => dispatch(emptyCart())}/>
                </div>
                <button>Checkout</button>
                <label className="no-product-message">Your cart is empty</label>
            </div>
        </div>
    )
}

export default CartPopup
