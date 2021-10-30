import { Button } from "@mui/material";
import React from "react";

const MyBooking = ({ pd, handleUpdate }) => {
  const { title, date, status } = pd;
  return (
    <div>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <h3>{status}</h3>
      <Button onClick={() => handleUpdate(pd._id)}>Confirm</Button>
    </div>
  );
};

export default MyBooking;
