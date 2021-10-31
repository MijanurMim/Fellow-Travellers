import { createTheme } from "@mui/material/styles";
// customized theme

const theme = createTheme({
  palette: {
    primary: {
      main: "#b2dfdb",
    },
  },
  background: {
    default: "#cfd8dc",
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightRegular: 500,
  },
});
export default theme;
