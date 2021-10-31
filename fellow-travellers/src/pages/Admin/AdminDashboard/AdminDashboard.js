import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AddMember from "../../AddMember/AddMember";
import AddPackages from "../../AddPackages/AddPackages";
import AllMembers from "../AllMembers/AllMembers";
import AllPackages from "../AllPackages/AllPackages";
import "./AdminDashboard.css";
const AdminDashboard = () => {
  const [control, setControl] = useState("allPackages");
  return (
    <Grid container>
      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={1}></Grid>
      <Grid item xs={12} md={2} className="dashboard">
        <Typography variant="h2">Dashboard</Typography>
        <div className="route">
          <li onClick={() => setControl("allMembers")}>All Members</li>

          <li onClick={() => setControl("allPackages")}>All Packages</li>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        {control === "allMembers" && <AllMembers></AllMembers>}
        {control === "allPackages" && <AllPackages></AllPackages>}
      </Grid>
      <Grid item xs={12} md={4}>
        {control === "allMembers" && <AddMember></AddMember>}
        {control === "allPackages" && <AddPackages></AddPackages>}
      </Grid>
      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={1}></Grid>
    </Grid>
  );
};

export default AdminDashboard;
