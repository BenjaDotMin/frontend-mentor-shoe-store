import {useSelector, useDispatch} from "react-redux";
import {modalToggle} from "../actions"; 
import ProductCarousel from "./ProductCarousel";
import closeIcon from "../images/icons/icon-close.svg";
import "../styles/Modal.scss";

function Modal() {
    const openModal = useSelector(state => state.modalPopup); 
    const dispatch = useDispatch(); 
    
    return (
        <div className={`modal ${openModal ? "active" : ""}`}>
            <div className="modal__wrapper">
                <img className={`modal__close-icon ${openModal ? "active" : ""}`} src={closeIcon} alt="close modal" onClick={() => dispatch(modalToggle())} />
                <ProductCarousel/>
            </div>            
        </div>
    )
}

export default Modal
