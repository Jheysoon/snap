import { styled } from "@mui/material";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

export const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});
