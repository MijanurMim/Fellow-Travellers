import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
// custom css
const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "400px",
    backgroundColor: "#456360",
    color: "white",
    position: "sticky",
    top: "100%",
    bottom: "0px",
    width: "100%",
    paddingTop: "40px",
  },
  bottomFooter: {
    backgroundColor: "#2c3b3a",

    color: "white",
    marginTop: "20px",
  },
  footerSpacing: {
    marginTop: "400px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      flexDirection={"column"}
      color="primary"
      className={classes.footerSpacing}
    >
      <Grid item container flexDirection={"column"} className={classes.footer}>
        {/* top footer area  */}
        <Grid item container>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3">Fellow Travellers</Typography>
          </Grid>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>
        </Grid>
        {/* middle foter area  */}
        <Grid item container spacing={4}>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Contact</Typography>
            <Typography>Services</Typography>
            <Typography>Feedback</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>Packages</Typography>
            <Typography>Members</Typography>
            <Typography>Cost</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Volunteer</Typography>
            <Typography>Destinations</Typography>
            <Typography>Security</Typography>
          </Grid>

          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
        <div className={classes.bottomFooter}>
          <small>&copy; - Fellow Travellers</small>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
