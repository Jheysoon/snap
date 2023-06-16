import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

import searchAndFilter from "../../actions/searchAndFilter";
import { useAppDispatch } from "../../redux/hooks";

export const SearchTextField = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    // @ts-ignore
    dispatch(searchAndFilter(search));
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
