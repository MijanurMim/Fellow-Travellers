import { Card } from "@mui/material";
import React from "react";
import AllPackages from "../../Admin/AllPackages/AllPackages";

const Packages = () => {
  return (
    <div>
      <h1>Our Packages</h1>
      <Card>
        <AllPackages></AllPackages>
      </Card>
    </div>
  );
};

export default Packages;
