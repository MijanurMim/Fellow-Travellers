import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PackageDetails = () => {
  const { packageId } = useParams();
  const [packageDetail, setPackageDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/packageDetails/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPackageDetail(data));
  }, []);
  return (
    <div>
      <h1>Details of: {packageDetail.title}</h1>
      <h4>Date Of : {packageDetail.date}</h4>
    </div>
  );
};

export default PackageDetails;
