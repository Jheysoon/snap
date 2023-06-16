import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCategory, setProducts } from "../redux/productsSlice/slice";
import { RootState } from "../redux/types";
import { Item } from "../types/item";

const setCategoryAndFilter = createAsyncThunk<
  void,
  string,
  { state: RootState }
>(
  "products/setCategoryAndFilter",
  async (category: string, { dispatch, getState }) => {
    dispatch(setCategory(category));
    const { origList } = getState().product;

    if (category !== "all") {
      const items = origList.filter(
        (product: Item) => product.category === category
      );

      dispatch(setProducts(items));
    }

    if (category === "all") {
      dispatch(setProducts(origList));
    }
  }
);

export default setCategoryAndFilter;
