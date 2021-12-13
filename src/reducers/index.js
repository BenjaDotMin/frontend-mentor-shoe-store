import counter from "./counter";
import cart from "./cart";
import cartPopup from "./cartPopup";
import modalPopup from "./modalPopup";
import mobileMenu from "./mobileMenu";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter, cart, cartPopup, modalPopup, mobileMenu
});

export default allReducers;