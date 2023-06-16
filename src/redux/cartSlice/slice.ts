import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "../../types/cartItem";
import { Item } from "../../types/item";
import { INITIAL_STATE } from "./const";

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      const item: CartItem[] = [{ quantity: 1, ...action.payload }];

      state.items.forEach((record) => {
        item.push(record);
      });

      state.items = item;
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      state.items.splice(index, 1);
    },
    addQuantity: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload;
      });

      state.items[index].quantity = ++state.items[index].quantity;
    },
    subractQuantity: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload;
      });

      state.items[index].quantity = --state.items[index].quantity;
    },

    resetCartList: () => INITIAL_STATE,
  },
});

export const {
  addToCart,
  resetCartList,
  removeItem,
  addQuantity,
  subractQuantity,
} = cartSlice.actions;
export default cartSlice;
