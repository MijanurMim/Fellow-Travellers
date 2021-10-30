import React, { useEffect, useState } from "react";
import useFirebase from "../../hooks/useFirebase";

const MyBookings = () => {
  const { user } = useFirebase();
  const [myPackages, setMyPackages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPackages(data));
  }, [user.email]);

  return (
    <div>
      <h1>This is my Bookings:{myPackages.length} </h1>
    </div>
  );
};

export default MyBookings;
