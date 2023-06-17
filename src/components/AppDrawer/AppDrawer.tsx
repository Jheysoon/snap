import InventoryIcon from "@mui/icons-material/Inventory";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import setCategoryAndFilter from "../../actions/setCategoryAndFilter";
import products from "../../assets/items.json";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledDrawer } from "./styles";

const CATEGORIES = ["all", ...new Set(products.map((item) => item.category))];

export const AppDrawer = () => {
  const { filters } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleSelectCategory = (category: string) => {
    // @ts-ignore
    dispatch(setCategoryAndFilter(category));
  };

  return (
    <StyledDrawer variant="permanent">
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {CATEGORIES.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                selected={text === filters.category}
                onClick={() => {
                  handleSelectCategory(text);
                }}
              >
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText
                  primary={text === "all" ? "All Categories" : text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};
