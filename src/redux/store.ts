import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import product from "./productsSlice/slice";
import cart from "./cartSlice/slice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["product"],
};

const rootReducer = combineReducers({
  product: product.reducer,
  cart: cart.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
