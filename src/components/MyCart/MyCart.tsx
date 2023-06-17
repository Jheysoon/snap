import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { resetCartList } from "../../redux/cartSlice/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CartItem } from "../../types/cartItem";
import { MyCartItem } from "../MyCartItem";
import { MyCartSubTotal } from "../MyCartSubTotal";
import { SuccessDialog } from "../SuccessDialog";

const drawerWidth = 400;

export const MyCart = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(resetCartList());
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCheckout = () => {
    setOpen(false);
    handleClearCart();
  };

  return (
    <>
      <SuccessDialog open={open} setOpen={handleCheckout} />

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
        anchor="right"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", marginTop: 2, mx: 2 }}>
          <Stack
            flexDirection="column"
            justifyContent="space-between"
            height="80px"
            sx={{ mx: 2 }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              My Cart
            </Typography>
            {items.length > 0 && (
              <Button variant="outlined" fullWidth onClick={handleClearCart}>
                Clear Cart
              </Button>
            )}
          </Stack>

          {items.map((item: CartItem, index) => (
            <MyCartItem item={item} key={index} />
          ))}

          {items.length > 0 && (
            <>
              <MyCartSubTotal />

              <Button
                variant="contained"
                fullWidth
                sx={{ px: 2 }}
                onClick={handleOpenDialog}
              >
                Checkout
              </Button>
            </>
          )}

          {items.length == 0 && (
            <Typography sx={{ textAlign: "center" }}>No items added</Typography>
          )}
        </Box>
      </Drawer>
    </>
  );
};
