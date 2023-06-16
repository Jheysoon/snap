import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import cart from "./cartSlice/slice";
import product from "./productsSlice/slice";

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
