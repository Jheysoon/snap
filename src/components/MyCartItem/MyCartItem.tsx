import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import numeral from "numeral";

import {
  addQuantity,
  removeItem,
  subractQuantity,
} from "../../redux/cartSlice/slice";
import { useAppDispatch } from "../../redux/hooks";
import { CartItem } from "../../types/cartItem";

type Props = {
  item: CartItem;
};

export const MyCartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  const handleRemoveItemInCart = (id: string) => {
    dispatch(
      removeItem({
        id,
      })
    );
  };

  const handleAddQuantity = () => {
    dispatch(addQuantity(item.id));
  };

  const handleSubractQuantity = () => {
    // should i remove it when quantity is zero ?
    if (item.quantity > 1) {
      dispatch(subractQuantity(item.id));
    }
  };

  return (
    <Box>
      <Fab
        size="small"
        color="primary"
        onClick={() => {
          handleRemoveItemInCart(item.id);
        }}
        sx={{ marginBottom: -10 }}
      >
        <CloseIcon />
      </Fab>
      <Card sx={{ margin: 1, display: "flex" }}>
        <img
          style={{
            height: 100,
            width: 100,
            objectFit: "contain",
            padding: 10,
          }}
          src={item.imageUrl}
        />
        <CardContent>
          <Typography>{item.productName}</Typography>
          <Typography>
            ₱ {numeral(item.unitPrice * item.quantity).format("0,0.00")}
          </Typography>
          <TextField
            placeholder="Search Item"
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleAddQuantity} size="small">
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSubractQuantity} size="small">
                    <RemoveIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={item.quantity}
            variant="outlined"
            size="small"
            sx={{ width: 150, textAlign: "center" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
