import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../../hooks/useFirebase";
import "./PackageDetails.css";
// / custom css
// const useStyles = makeStyles((theme) => ({
//   card: {
//     [theme.breakpoints.down("xs")]: {
//       width: "300px",
//     },
//   },
//   formMain: {
//     margin: "100px",
//   },
//   formInput: {
//     display: "block",
//     marginTop: "30px",
//     padding: "5px",
//     borderRadius: "5px",
//     width: "300px",
//   },
//   buttonText: {
//     textDecoration: "none",
//   },
// }));

const PackageDetails = () => {
  // custom css classes
  // const classes = useStyles();
  const { user } = useFirebase();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "Pending";
    fetch("http://localhost:5000/addNewBooking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  // ------------------
  const { packageId } = useParams();
  const [packageDetail, setPackageDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/packageDetails/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPackageDetail(data));
  });
  return (
    <Grid container sx={{ mt: "200px" }}>
      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={1}></Grid>

      <Grid item xs={12} md={5}>
        {/* Selected Package Info  */}
        <Grid item>
          <Typography variant="h3">
            Details of: {packageDetail.title}
          </Typography>
          <h4>Date Of : {packageDetail.date}</h4>
        </Grid>
      </Grid>

      {/* form area  */}
      <Grid item xs={12} md={5} className="packageDetailForm">
        <Typography variant="h4">Package Details</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {packageDetail.title && (
            <input
              {...register("title", { required: true })}
              defaultValue={packageDetail.title}
              className="inputField"
            />
          )}

          {packageDetail.date && (
            <input
              {...register("date", { required: true })}
              defaultValue={packageDetail.date}
              className="inputField"
            />
          )}
          {packageDetail.description && (
            <input
              {...register("description", { required: true })}
              defaultValue={packageDetail.description}
              className="inputField"
            />
          )}
          {packageDetail.packageType && (
            <input
              {...register("packageType", { required: true })}
              defaultValue={packageDetail.packageType}
              className="inputField"
            />
          )}
          <br />

          <Button type="submit">Submit</Button>
        </form>
      </Grid>
      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={1}></Grid>
    </Grid>
  );
};

export default PackageDetails;
