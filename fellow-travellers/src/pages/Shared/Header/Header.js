import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

// / custom css
const useStyles = makeStyles(() => ({
  headerOption: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },

  navbarButton: {
    width: "200px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const { user, logOut } = useAuth();
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container sx={{ py: "10px" }}>
              {/* Appbar Name and logo  */}
              <Grid item xs={12} md={2}>
                <Typography variant="h4">
                  <DashboardIcon />
                  BDNHC
                </Typography>
              </Grid>

              {/* appbar routing area  */}
              <Grid item xs={12} md={8}>
                <Link to="/home" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/packages" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    Packages
                  </Button>
                </Link>
                <Link to="/myBookings" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    My Bookings
                  </Button>
                </Link>
                <Link to="/totalBookings" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    Total Bookings
                  </Button>
                </Link>
                <Link to="/admin" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    Admin
                  </Button>
                </Link>
              </Grid>

              {/* appbar login area  */}
              <Grid item xs={12} md={2}>
                {/* show user name dynamicly  */}
                <Typography>{user?.email}</Typography>
                {/* login button and logout  */}
                {user?.email ? (
                  <Button onClick={logOut} variant="contained" sx={{ mx: 2 }}>
                    <LogoutIcon></LogoutIcon>
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="contained" sx={{ mx: 2 }}>
                      <LoginIcon></LoginIcon>
                    </Button>
                  </Link>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default Header;
