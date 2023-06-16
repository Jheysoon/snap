import { configureStore } from "@reduxjs/toolkit";
import product from "./productsSlice/slice";
import cart from "./cartSlice/slice";

export const store = configureStore({
  reducer: {
    product: product.reducer,
    cart: cart.reducer,
  },
});
