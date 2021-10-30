import { Button } from "@mui/material";
import React from "react";

const Package = ({ pd, handleDelete }) => {
  const { title, date } = pd;

  return (
    <div>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <Button onClick={() => handleDelete(pd._id)}>Delete</Button>
    </div>
  );
};

export default Package;
