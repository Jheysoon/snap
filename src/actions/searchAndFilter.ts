import { createAsyncThunk } from "@reduxjs/toolkit";
import Fuse from "fuse.js";
import { setProducts } from "../redux/productsSlice/slice";
import { RootState } from "../redux/types";
import { Item } from "../types/item";

const searchAndFilter = createAsyncThunk<void, string, { state: RootState }>(
  "products/setCategoryAndFilter",
  async (search: string, { dispatch, getState }) => {
    const {
      origList,
      filters: { category },
    } = getState().product;
    let searchList = origList;

    if (category !== "all") {
      searchList = origList.filter(
        (product: Item) => product.category === category
      );
    }

    if (search === "") {
      dispatch(setProducts(searchList));
      return;
    }

    if (search !== "" && search !== null) {
      const options = {
        useExtendedSearch: true,
        keys: ["productName"],
      };

      const fuse = new Fuse(searchList, options);
      const results = fuse.search(`^${search}`);

      const list: Item[] = [];
      results.forEach((result) => {
        list.push(result.item);
      });

      dispatch(setProducts(list));
    }
  }
);

export default searchAndFilter;
