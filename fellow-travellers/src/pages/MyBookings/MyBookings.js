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

  // handle update

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
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
  };

  return (
    <div>
      <h1>This is my Bookings:{myPackages.length} </h1>
      {myPackagesDetails.map((pd) => (
        <MyBooking key={pd._id} pd={pd} handleUpdate={handleUpdate}></MyBooking>
      ))}
    </div>
  );
};

export default MyBookings;
