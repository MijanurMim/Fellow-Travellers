import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allPackages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [control]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deletePackage/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      //   delete will not send any data thats why it does not have body  method
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Deleted");
          setControl(!control);
        } else {
          setControl(false);
        }
      });
  };

  return (
    <div>
      <h1>Our Packages</h1>
      <Grid item container xs={12} spacing={4}>
        {/* this line is for side space of the page  */}
        <Grid item xs={false} md={1}></Grid>
        <Grid
          item
          container
          xs={false}
          md={10}
          justifyContent="space-around"
          sx={{ my: "40px" }}
        >
          {packages.map((pd) => (
            <Package key={pd._id} pd={pd} handleDelete={handleDelete}></Package>
          ))}
        </Grid>

        <Grid item xs={false} md={1}></Grid>
      </Grid>
    </div>
  );
};

export default Packages;
