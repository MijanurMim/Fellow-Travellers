import { createTheme } from "@mui/material/styles";
// customized theme

const theme = createTheme({
  palette: {
    primary: {
      main: "#78909c",
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
