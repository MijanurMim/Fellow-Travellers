import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
// custom css
const useStyles = makeStyles(() => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://image.freepik.com/free-photo/aerial-shot-maldives-showing-amazing-beach-clear-blue-sea-jungles_181624-3948.jpg')`,

    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sx={{ flexGrow: 1 }} className={classes.hero}>
        <Box>
          Fellow Travellers
          <Typography>
            Enjoy Your Vacations With Highest Security And Luxury
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
