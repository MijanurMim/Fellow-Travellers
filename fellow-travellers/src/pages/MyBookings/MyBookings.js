import React, { useEffect, useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import MyBooking from "./MyBooking/MyBooking";

const MyBookings = () => {
  const { user } = useFirebase();

  const [myPackages, setMyPackages] = useState([]);
  const [myPackagesDetails, setMyPackagesDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPackages(data));
  }, [user.email]);

  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => setMyPackagesDetails(data));
  }, [user.email]);

  return (
    <div>
      <h1>This is my Bookings:{myPackages.length} </h1>
      {myPackagesDetails.map((pd) => (
        <MyBooking key={pd._id} pd={pd}></MyBooking>
      ))}
    </div>
  );
};

export default MyBookings;
