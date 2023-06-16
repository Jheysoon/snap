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
    resetCartList: () => INITIAL_STATE,
  },
});

export const { addToCart, resetCartList } = cartSlice.actions;
export default cartSlice;
