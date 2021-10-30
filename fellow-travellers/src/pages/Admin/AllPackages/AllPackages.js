import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allPackages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [control]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deletePackage/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      //   delete will not send any data thats why it does not have body  method
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Deleted");

          setControl(!control);
        } else {
          setControl(false);
        }
      });
  };

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Views</th>
          </tr>
        </thead>
        {packages?.map((pd, index) => (
          <tbody key={index}>
            <tr className="bg-emerald-200">
              <td>{pd.title}</td>
              <td>{pd.date}</td>
              <td>{pd.description}</td>
              <td>
                <Button onClick={() => handleDelete(pd._id)}>Delete</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllPackages;
