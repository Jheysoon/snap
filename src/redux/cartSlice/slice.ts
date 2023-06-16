import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./const";
import { Item } from "../../types/item";
import { CartItem } from "../../types/cartItem";

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
      const idxObj = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      state.items.splice(idxObj, 1);
    },
    resetCartList: () => INITIAL_STATE,
  },
});

export const { addToCart, resetCartList, removeItem } = cartSlice.actions;
export default cartSlice;
