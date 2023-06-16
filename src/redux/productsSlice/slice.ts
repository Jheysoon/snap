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
    setCategory: (state, action: PayloadAction<string>) => {
      state.filters.category = action.payload;
    },
    resetList: () => INITIAL_STATE,
  },
});

export const { setProducts, resetList, setCategory } = productsSlice.actions;
export default productsSlice;
