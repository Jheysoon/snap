import { AppBar, AppDrawer, MyCart } from "./components";
import Box from "@mui/material/Box";
import { Home } from "./pages/Home";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <AppDrawer />
      <Home />
      <MyCart />
    </Box>
  );
}

export default App;
