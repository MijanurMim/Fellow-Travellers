import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Package = ({ pd, handleDelete }) => {
  const { _id, title, date } = pd;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{_id}</h3>
      <h4>{date}</h4>
      <Button onClick={() => handleDelete(pd._id)}>Delete</Button>
      <Link to={`/packageDetails/${_id}`}>
        <Button>Book {title.toLowerCase()} </Button>
      </Link>
    </div>
  );
};

export default Package;
