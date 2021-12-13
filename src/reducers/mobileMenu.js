const mobileMenu = (state = false, action) => {  
  switch(action.type){ 
    case "MOBILE_MENU": return !state;
    default: return state;
  }
}

export default mobileMenu;