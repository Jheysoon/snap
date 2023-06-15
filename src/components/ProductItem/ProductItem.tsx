import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Item } from "../../redux/productsSlice/types";

export const ProductItem = () => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://assetbucketdevelopment.blob.core.windows.net/testing/38572723316446256-4502091711_4306188427186_01.jpg.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Elecap buwzabih pil onebi
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Category 1
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 2, pb: 1 }}>
            <Typography>
              Otpauwo kuhsu bolug sefbiuda edodet zub wi ko dieka ro wub
              gefmejog. Huaf wo vi keherfum se iruverhoc di wo mimitzad ziztahig
              bobusoru nutbac maj mawhusom bosorke. Pevomav lu leir nijocru
              laheh huvi adu ga isu fos ekfij gibvo vimfo.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{ textAlign: "center", marginTop: 3 }}
          >
            123123
          </Typography>
          <Button variant="contained" sx={{ margin: 2 }}>
            Add to cart
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
