import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import MyBooking from "./MyBooking/MyBooking";

const MyBookings = () => {
  const { user } = useFirebase();

  // const [statusUpdate, setStatusUpdate] = useState([]);
  const [myPackages, setMyPackages] = useState([]);
  const [myPackagesDetails, setMyPackagesDetails] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://wicked-spider-07465.herokuapp.com/myBookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPackages(data));
  }, [user.email]);

  useEffect(() => {
    fetch(
      `https://wicked-spider-07465.herokuapp.com/myBookings/${user?.email}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        // body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => setMyPackagesDetails(data));
  }, [user.email]);

  // Handle Delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure You Want to Delete ? ");
    if (proceed) {
      fetch(`https://wicked-spider-07465.herokuapp.com/deleteBooking/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        //   delete will not send any data thats why it does not have body  method
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted");
            const remaining = myPackages.filter((pd) => pd._id !== id);
            setMyPackages(remaining);

            setControl(!control);
          } else {
            setControl(false);
          }
        });
    }
  };

  // handle update
  const handleUpdate = (id) => {
    const proceed = window.confirm(
      "Are You Sure You Want to Change the Status ? "
    );
    if (proceed) {
      fetch(`https://wicked-spider-07465.herokuapp.com/updateStatus/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            alert("Update Successful");
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
        My Bookings:{myPackages.length}{" "}
      </Typography>
      {myPackagesDetails.map((pd) => (
        <MyBooking
          key={pd._id}
          pd={pd}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        ></MyBooking>
      ))}
    </div>
  );
};

export default MyBookings;
