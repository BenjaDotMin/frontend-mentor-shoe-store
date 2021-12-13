const cart = (state = 0, action) => {  
  switch(action.type){ 
    case "INCREMENT_CART": return state <= 99 ? state + action.payload : state;
    case "EMPTY_CART": return state = 0; 
    default: return state;
  }
}

export default cart;