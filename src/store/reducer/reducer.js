import {GET_HOME} from '../action/action';

const initialState = {
  Home: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME:
      return {...state, Home: action.payload};
    default:
      state;
  }
};
