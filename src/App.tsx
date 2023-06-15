import { AppBar } from "./components";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  return (
    <>
      <AppBar />

      <Grid container spacing={2}>
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
    </>
  );
}

export default App;
