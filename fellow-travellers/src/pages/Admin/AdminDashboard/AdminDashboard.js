import React, { useState } from "react";
import AddPackages from "../../AddPackages/AddPackages";
import AllMembers from "../AllMembers/AllMembers";
import AllPackages from "../AllPackages/AllPackages";

const AdminDashboard = () => {
  const [control, setControl] = useState("allPackages");
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <div>
          <li onClick={() => setControl("allMembers")}>All Members</li>

          <li onClick={() => setControl("allPackages")}>All Packages</li>
        </div>
      </div>
      <div>
        {control === "allMembers" && <AllMembers></AllMembers>}
        {control === "allPackages" && <AllPackages></AllPackages>}
      </div>
      <div>
        <AddPackages></AddPackages>
      </div>
    </div>
  );
};

export default AdminDashboard;
