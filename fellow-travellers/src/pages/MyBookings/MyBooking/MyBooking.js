import React from "react";

const MyBooking = ({ pd }) => {
  const { title, date } = pd;
  return (
    <div>
      <h1>{title}</h1>
      <h4>{date}</h4>
    </div>
  );
};

export default MyBooking;
