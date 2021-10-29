import React, { useState } from "react";
import AllMembers from "../AllMembers/AllMembers";
import AllPackages from "../AllPackages/AllPackages";
import AllServices from "../AllServices/AllServices";

const AdminDashboard = () => {
  const [control, setControl] = useState("allPackages");
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <div>
          <li onClick={() => setControl("allMembers")}>All Members</li>

          <li onClick={() => setControl("allPackages")}>All Packages</li>
          <li onClick={() => setControl("allServices")}>All Services</li>
        </div>
      </div>
      <div>
        {control === "allMembers" && <AllMembers></AllMembers>}
        {control === "allPackages" && <AllPackages></AllPackages>}
        {control === "allServices" && <AllServices></AllServices>}
      </div>
    </div>
  );
};

export default AdminDashboard;
