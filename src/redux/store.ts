import { configureStore } from "@reduxjs/toolkit";
import product from "./productsSlice/slice";

export const store = configureStore({
  reducer: {
    product: product.reducer,
  },
});
