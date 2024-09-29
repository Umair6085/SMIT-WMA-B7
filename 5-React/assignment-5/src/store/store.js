import { createStore } from "redux";

// Initial state
const initialState = {
  count: 0,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;