import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../../hooks/useFirebase";

const PackageDetails = () => {
  const { user } = useFirebase();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "Pending";
    fetch("http://localhost:5000/addEvent", {
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
  }, []);
  return (
    <div>
      <div>
        <h1>Details of: {packageDetail.title}</h1>
        <h4>Date Of : {packageDetail.date}</h4>
      </div>
      <div>
        <h1>Please Recheck if You are sure then Click Five times to Confirm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title", { required: true })}
            defaultValue={packageDetail.title}
          />

          <input
            {...register("date", { required: true })}
            defaultValue={packageDetail.date}
          />
          <input
            {...register("description", { required: true })}
            defaultValue={packageDetail.description}
          />
          <input
            {...register("packageType", { required: true })}
            defaultValue={packageDetail.packageType}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
