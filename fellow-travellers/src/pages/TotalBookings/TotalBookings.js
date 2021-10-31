import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TotalBooking from "./TotalBooking/TotalBooking";

const TotalBookings = () => {
  const [bookings, setBookings] = useState([]);
  // const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <Typography variant="h2" sx={{ mt: "100px" }} color="primary">
        Total Bookings:{bookings.length}
      </Typography>
      {bookings.map((pd) => (
        <TotalBooking key={pd._id} pd={pd}></TotalBooking>
      ))}
    </div>
  );
};

export default TotalBookings;
