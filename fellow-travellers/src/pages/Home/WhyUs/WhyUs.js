import AssessmentIcon from "@mui/icons-material/Assessment";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PublicIcon from "@mui/icons-material/Public";
import SecurityIcon from "@mui/icons-material/Security";
import { Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./WhyUs.css";

const useStyles = makeStyles((theme) => ({
  whyUsImg: {
    [theme.breakpoints.down("md")]: {
      width: "260px",
      height: "260px",
    },
  },
}));

const WhyUs = () => {
  const classes = useStyles();
  return (
    <Grid container className="whyUs">
      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={2}></Grid>
      <Grid item xs={12} md={4}>
        <img
          className={classes.whyUsImg}
          src="https://image.freepik.com/free-vector/questions-concept-illustration_114360-2383.jpg"
          alt=""
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <div>
          <Typography variant="h1" color="#b2ff59">
            Why Us
          </Typography>
          <Typography variant="h4" color="primary">
            Every Time We Provide Best Service
          </Typography>
        </div>
        <div className="whyUsPoints">
          <div className="whyUsPointsItem">
            <div className="whyUsPointsInnerItem">
              <IconButton>
                <PublicIcon />
              </IconButton>
              <Typography>Exclusive Packages</Typography>
            </div>
            <div>
              <IconButton>
                <AssessmentIcon />
              </IconButton>
              <Typography>World Class Service</Typography>
            </div>
          </div>
          <div className="whyUsPointsItem">
            <div className="whyUsPointsInnerItem">
              <IconButton>
                <EmojiPeopleIcon />
              </IconButton>

              <Typography>Best Travel Guide</Typography>
            </div>
            <div>
              <IconButton>
                <SecurityIcon />
              </IconButton>
              <Typography>100% Secure</Typography>
            </div>
          </div>
        </div>
      </Grid>

      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={2}></Grid>
    </Grid>
  );
};

export default WhyUs;
