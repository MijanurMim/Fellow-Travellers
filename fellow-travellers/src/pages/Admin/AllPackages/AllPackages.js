import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllPackage from "./AllPackage/AllPackage";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("https://wicked-spider-07465.herokuapp.com/allPackages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [control]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure You Want to Delete ? ");
    if (proceed) {
      fetch(`https://wicked-spider-07465.herokuapp.com/deletePackage/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        //   delete will not send any data thats why it does not have body  method
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted");
            const remaining = packages.filter((pd) => pd._id !== id);
            setPackages(remaining);
            setControl(!control);
          } else {
            setControl(false);
          }
        });
    }
  };

  return (
    <div>
      <Typography variant="h2" sx={{ mt: "100px" }} color="primary">
        Total Packages:{packages.length}{" "}
      </Typography>
      {packages.map((pd) => (
        <AllPackage
          key={pd._id}
          pd={pd}
          handleDelete={handleDelete}
        ></AllPackage>
      ))}
    </div>
  );
};

export default AllPackages;
