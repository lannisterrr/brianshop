const cartReducer = (state, action) => {
  const existingItem = state.cart.find(i => i.id === action.payload.id);
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartItems: !existingItem ? state.cartItems + 1 : state.cartItems,
      };
    case 'DECREASE_COUNT':
      let index = state.cart.findIndex(i => i.id === action.payload.id); // the index where item is more than 1
      const copy = [...state.cart];
      copy.splice(index, 1);
      console.log('copy', copy);
      return {
        ...state,
        cart: copy,
      };

    case 'REMOVE_FROM_CART':
      const filteredData = state.cart.filter(i => i.id !== action.payload.id);
      return {
        ...state,
        cart: filteredData,
      };

    default:
      return state;
  }
};

const displayCart = (state, data) => {
  const cartReducer = (accum, item, i, arr) => {
    const existingItem = accum.find(i => i.id === item.id);

    if (!existingItem) {
      return [...accum, { ...item, count: 1 }];
    } else {
      existingItem.count++;
    }

    return accum;
  };
  const updatedCart = data.reduce(cartReducer, []);
  return updatedCart;
};

export { cartReducer, displayCart };
