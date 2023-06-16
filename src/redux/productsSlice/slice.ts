import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./const";
import { Item } from "../../types/item";

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    setProducts: (state, action: PayloadAction<Item[]>) => {
      state.list = action.payload;
    },
    resetList: () => INITIAL_STATE,
  },
});

export const { setProducts, resetList } = productsSlice.actions;
export default productsSlice;
