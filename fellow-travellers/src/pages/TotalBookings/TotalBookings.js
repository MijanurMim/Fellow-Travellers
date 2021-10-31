import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import TotalBooking from "./TotalBooking/TotalBooking";

const TotalBookings = () => {
  const { user } = useFirebase();
  const [bookings, setBookings] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("https://wicked-spider-07465.herokuapp.com/allBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

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
            const remaining = bookings.filter((pd) => pd._id !== id);
            setBookings(remaining);

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
        Total Bookings:{bookings.length}
      </Typography>
      {bookings.map((pd) => (
        <TotalBooking
          key={pd._id}
          pd={pd}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        ></TotalBooking>
      ))}
    </div>
  );
};

export default TotalBookings;
