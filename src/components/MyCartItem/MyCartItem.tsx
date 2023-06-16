import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import numeral from "numeral";

import { CartItem } from "../../types/cartItem";
import { useAppDispatch } from "../../redux/hooks";
import { removeItem } from "../../redux/cartSlice/slice";

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
          <Typography>₱ {numeral(item.unitPrice).format("0,0.00")}</Typography>
          <TextField
            placeholder="Search Item"
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={item.quantity}
            variant="outlined"
            size="small"
            sx={{ width: 130, textAlign: "center" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
