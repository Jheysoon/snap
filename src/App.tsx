import { AppBar, AppDrawer, SearchTextField } from "./components";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { useAppSelector } from "./redux/hooks";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Home } from "./pages/Home";

function App() {
  const { list } = useAppSelector((state) => state.product);

  console.log("products ####");
  console.log(list);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <AppDrawer />
      <Home />
    </Box>
  );
}

export default App;
