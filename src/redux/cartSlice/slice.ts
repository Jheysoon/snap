import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./const";
import { Item } from "../../types/item";

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      const item: Item[] = [action.payload];

      state.items.forEach((record) => {
        item.push(record);
      });

      state.items = item;
    },
    resetList: () => INITIAL_STATE,
  },
});

export const { addToCart, resetList } = cartSlice.actions;
export default cartSlice;
