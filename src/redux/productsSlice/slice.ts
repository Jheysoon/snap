import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./const";
import { Item } from "./types";

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    filterList: (state, action: PayloadAction<Item[]>) => {
      state.list = action.payload;
    },
    resetList: () => INITIAL_STATE,
  },
});

export const { filterList, resetList } = productsSlice.actions;
export default productsSlice;
