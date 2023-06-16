import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

import Fuse from "fuse.js";
import products from "../../assets/items.json";
import { useAppDispatch } from "../../redux/hooks";
import { setProducts } from "../../redux/productsSlice/slice";
import { Item } from "../../types/item";

export const SearchTextField = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string | null>(null);

  // @TODO move this logic
  useEffect(() => {
    if (search === "") {
      dispatch(setProducts(products));
      return;
    }

    if (search !== "" && search !== null) {
      //
      const options = {
        useExtendedSearch: true,
        keys: ["productName"],
      };

      const fuse = new Fuse(products, options);
      const results = fuse.search(`^${search}`);

      const list: Item[] = [];
      results.forEach((result) => {
        list.push(result.item);
      });

      dispatch(setProducts(list));
    }
  }, [search, dispatch]);

  return (
    <TextField
      placeholder="Search Item"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      fullWidth
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
};
