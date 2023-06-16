import InventoryIcon from "@mui/icons-material/Inventory";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import { AnyAction } from "redux";
import setCategoryAndFilter from "../../actions/setCategoryAndFilter";
import products from "../../assets/items.json";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCategory } from "../../redux/productsSlice/slice";

const drawerWidth = 240;

const CATEGORIES = ["all", ...new Set(products.map((item) => item.category))];

export const AppDrawer = () => {
  const { filters } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleSelectCategory = (category: string) => {
    // @ts-ignore
    dispatch(setCategoryAndFilter(category));
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
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
      </Drawer>
    </>
  );
};
