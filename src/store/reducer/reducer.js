import { ADD_TO_CART, DECREMENT, INCREMENT } from '../action/action';

const initialState = {
  cart: '',
  addCart: 0,
};
export const mainReducer = (state = initialState, action) => {
  const val = state.addCart;
  // console.logs(state, action.payload);
  // return { addCart: val + 1 };

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.payload };
    case INCREMENT:
      return { addCart: state.addCart + 1 };
    case DECREMENT:
      return { ...state, addCart: val - 1 };
    default:
      state;
  }
};
