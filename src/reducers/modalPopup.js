const modalPopup = (state = false, action) => {  
  switch(action.type){ 
    case "MODAL_TOGGLE": return !state;
    default: return state;
  }
}

export default modalPopup;