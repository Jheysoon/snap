import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const drawerWidth = 400;

export const MyCart = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        anchor="right"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", marginTop: 2 }}>
          <Stack
            flexDirection="column"
            justifyContent="space-between"
            height="80px"
            sx={{ mx: 2 }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              My Cart
            </Typography>
            <Button variant="outlined" fullWidth>
              Clear Cart
            </Button>
          </Stack>

          <Box>
            <Button variant="contained" sx={{ marginBottom: -10 }}>
              X
            </Button>
            <Card sx={{ margin: 1, display: "flex" }}>
              <img
                style={{
                  height: 100,
                  width: 100,
                  objectFit: "contain",
                  padding: 10,
                }}
                src="https://assetbucketdevelopment.blob.core.windows.net/testing/38572723316446256-4502091711_4306188427186_01.jpg.jpg"
              />
              <CardContent>
                <Typography>Elecap buwzabih pil onebi.</Typography>
                <Typography>100.00</Typography>
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
                  value={1}
                  variant="outlined"
                  size="small"
                  sx={{ width: 130, textAlign: "center" }}
                />
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
