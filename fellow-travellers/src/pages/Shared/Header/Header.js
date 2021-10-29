import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <h1>This is Header</h1>
      <Link to="/home">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/packages">Packages</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/myBookings">My Bookings</Link>
      <Link to="/totalBookings">Total Bookings</Link>

      {/* Login / Logout area  */}
      <Typography>{user?.email}</Typography>
      {user?.email ? (
        <Button onClick={logOut} variant="contained">
          Logout
        </Button>
      ) : (
        <Link to="/login">
          <Button variant="contained" sx={{ mx: 2 }}>
            Log in
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
