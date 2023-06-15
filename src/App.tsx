import { AppBar, AppDrawer } from "./components";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { useAppSelector } from "./redux/hooks";

function App() {
  const products = useAppSelector((state) => state.product);

  console.log("products ####");
  console.log(products);
  return (
    <>
      <AppBar />

      <AppDrawer />

      <Box>
        <Grid container>
          <Grid xs={3}>
            <div>xs=4</div>
          </Grid>
          <Grid xs={6}>
            <div>xs=8</div>
          </Grid>
          <Grid xs={3}>
            <div>xs=4</div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
