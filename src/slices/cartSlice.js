import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItemsCount: 0, // needed when using object
    items: [],
  },
  reducers: {
    addItemsToCart: (state, action) => {
      //Vanilla(Older) Redux => Don't MUTATE STATE
      //   const newState = [...state];
      //   newState.items.push(action.payload);
      //   return newState;
      //mutating the state here in Redux Toolkit
      // need to rework by taking arrays --  // state.items.push(action.payload);
      state.totalItemsCount += 1;
      const itemExist = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExist) {
        itemExist.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      //(OR)
      // const { itemId } = action.payload;
      // state.items[itemId]
      // ? (state.items[itemId].quantity += 1)
      //   : (state.items[itemId] = { item: action.payload, quantity: 1 });
    },

    removeItemsFromCart: (state, action) => {
      //Using splice
      const indexOfExistingItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.totalItemsCount) {
        state.totalItemsCount -= 1;
      } else {
        state.totalItemsCount = 0;
      }
      if (indexOfExistingItem !== -1) {
        if (state.items[indexOfExistingItem].quantity > 1) {
          state.items[indexOfExistingItem].quantity -= 1;
        } else {
          state.items.splice(indexOfExistingItem, 1);
        }
      }

      //Using Object
      // const { itemId } = action.payload;
      // state.totalItemsCount ? state.totalItemsCount - 1 : 0;
      // if (state.items[itemId].quantity) {
      //   const item = state.items[itemId];
      //   item.quantity -= 1;
      // } else {
      //   delete state.items[itemId];
      // }
    },
    clearCart: (state) => {
      state.items.length = [];
      state.totalItemsCount = 0; // needed when using object approach
    },
  },
});

export const { addItemsToCart, removeItemsFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
