import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import numeral from "numeral";

import { Item } from "../../types/item";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice/slice";

export const ProductItem = (props: Item) => {
  const { id, productName, description, category, unitPrice, imageUrl } = props;
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(
      addToCart({
        id,
        productName,
        description,
        category,
        unitPrice,
        imageUrl,
      })
    );
  };

  return (
    <Card
      sx={{
        display: "flex",
        my: 4,
      }}
      key={id}
    >
      <img
        style={{
          width: 200,
          objectFit: "contain",
          padding: 10,
        }}
        src={imageUrl}
      />

      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid xs={9}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography component="div" variant="h5">
                {productName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {category}
              </Typography>
            </CardContent>
            <Box sx={{ pl: 2, pb: 1 }}>
              <Typography>{description}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={3}>
          <Stack justifyContent="center" alignItems="center" height="100%">
            <Stack
              sx={{
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                component="div"
                variant="h5"
                sx={{ textAlign: "center", marginTop: 3 }}
              >
                ₱ {numeral(unitPrice).format("0,0.00")}
              </Typography>
              <Button
                variant="contained"
                sx={{ margin: 2 }}
                onClick={handleOnClick}
              >
                Add to cart
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
