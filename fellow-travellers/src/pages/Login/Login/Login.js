import { Button, Typography } from "@mui/material";
import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  // google signin
  const { signInUsingGoogle } = useAuth();

  //  redirect the private route
  const location = useLocation();
  const history = useHistory();
  // if user login dirctly then after login sending user to home page
  const redirect_uri = location.state?.from || "/";

  // Handling Google Sign in
  const handleGoogleLogIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <Typography variant="h1" color="primary">
        Login
      </Typography>
      <Button onClick={handleGoogleLogIn} variant="contained">
        Sign in with Google ?
      </Button>
    </div>
  );
};

export default Login;
