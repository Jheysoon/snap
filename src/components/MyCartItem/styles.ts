import { styled } from "@mui/material";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";

export const StyledFab = styled(Fab)({
  marginBottom: -40,
  minWidth: 0,
  width: 25,
  minHeight: 0,
  height: 25,
});

export const StyledImg = styled("img")({
  height: 100,
  width: 100,
  objectFit: "contain",
  padding: 10,
});

export const StyledTextField = styled(TextField)({
  width: 110,
  textAlign: "center",
  fontSize: 5,
  "& .MuiOutlinedInput-root": {
    paddingLeft: 0,
    paddingRight: 0,
  },
});
