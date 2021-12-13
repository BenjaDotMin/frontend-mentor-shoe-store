const cartPopup = (state = false, action) => {  
  switch(action.type){ 
    case "CART_TOGGLE": return !state;
    default: return state;
  }
}

export default cartPopup;