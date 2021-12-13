const counter = (state = 1, action) => {
  switch(action.type){ 
    case "INCREMENT": return state <= 99 ? state + 1 : state;
    case "DECREMENT": return state >= 2 ? state - 1 : state; 
    default: return state;
  }
}

export default counter;