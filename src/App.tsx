import { AppBar, AppDrawer } from "./components";
import Box from "@mui/material/Box";
import { useAppSelector } from "./redux/hooks";
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
