import { SearchTextField, ProductItem } from "../../components";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../redux/hooks";

import { Item } from "../../redux/productsSlice/types";

export const Home = () => {
  const { list } = useAppSelector((state) => state.product);

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <Grid container spacing={2}>
        <Grid xs={9}>
          <Box sx={{ mx: 8 }}>
            <SearchTextField />
            {list.map((product: Item) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </Box>
        </Grid>
        <Grid xs={3}>
          <Typography>xs=4</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
