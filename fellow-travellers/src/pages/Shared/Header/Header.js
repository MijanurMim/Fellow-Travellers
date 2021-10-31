import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
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
                <Typography variant="h4">Fellow Travellers</Typography>
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
              <Grid item container xs={12} md={2}>
                {/* show user name dynamicly  */}
                <div className="userInfo">
                  <Avatar>
                    <img src={user?.photoURL} alt="" />
                  </Avatar>
                  <Typography>{user?.displayName}</Typography>
                  {/* login button and logout  */}
                  {user?.email ? (
                    <Button onClick={logOut} variant="contained" sx={{ mx: 2 }}>
                      logout
                    </Button>
                  ) : (
                    <Link to="/login" className={classes.link}>
                      <Button variant="contained" sx={{ mx: 2 }}>
                        login
                      </Button>
                    </Link>
                  )}
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default Header;
