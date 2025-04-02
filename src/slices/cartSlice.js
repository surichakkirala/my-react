import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemsToCart: (state, action) => {
      //Vanilla(Older) Redux => Don't MUTATE STATE
      //   const newState = [...state];
      //   newState.items.push(action.payload);
      //   return newState;
      //mutating the state here in Redux Toolkit
      console.log("state", state);
      console.log("action", action);
      state.items.push(action.payload);
      console.log(current(state));
    },

    removeItemsFromCart: (state, action) => {
      //need to update logic
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItemsToCart, removeItemsFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
