import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllMember from "./AllMember/AllMember";

const AllMembers = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allMembers")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div>
      <Typography variant="h2" sx={{ mt: "100px" }} color="primary">
        All Members:{members.length}{" "}
      </Typography>
      {members.map((pd) => (
        <AllMember key={pd._id} pd={pd}></AllMember>
      ))}
    </div>
  );
};

export default AllMembers;
