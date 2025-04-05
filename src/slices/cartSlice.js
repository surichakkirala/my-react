import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItemsCount: 0,
    items: {},
  },
  reducers: {
    addItemsToCart: (state, action) => {
      //Vanilla(Older) Redux => Don't MUTATE STATE
      //   const newState = [...state];
      //   newState.items.push(action.payload);
      //   return newState;
      //mutating the state here in Redux Toolkit
      // need to rework by taking arrays --  // state.items.push(action.payload);
      const { itemId } = action.payload;
      state.totalItemsCount += 1;
      state.items[itemId]
        ? (state.items[itemId].quantity += 1)
        : (state.items[itemId] = { item: action.payload, quantity: 1 });
    },

    removeItemsFromCart: (state, action) => {
      //need to update logic -- state.items.pop();
      const { itemId } = action.payload;
      state.totalItemsCount ? state.totalItemsCount - 1 : 0;
      if (state.items[itemId].quantity) {
        const item = state.items[itemId];
        item.quantity -= 1;
      } else {
        delete state.items[itemId];
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalItemsCount = 0;
    },
  },
});

export const { addItemsToCart, removeItemsFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
