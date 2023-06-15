import { SearchTextField, ProductItem } from "../../components";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Home = () => {
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

            <ProductItem />
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
