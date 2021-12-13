export const increment = () => {
  return {
    type: "INCREMENT" 
  }
}

export const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

export const incrementCart = payload => {
  return {
    type: "INCREMENT_CART",
    payload: payload //amount from user input
  }
}

export const emptyCart = () => {
  return {
    type: "EMPTY_CART"
  }
}

export const cartToggle = () => {
  return {
    type: "CART_TOGGLE"
  }
}

export const modalToggle = () => {
  return {
    type: "MODAL_TOGGLE"
  }
}

export const mobileMenu = () => {
  return {
    type: "MOBILE_MENU"
  }
}

