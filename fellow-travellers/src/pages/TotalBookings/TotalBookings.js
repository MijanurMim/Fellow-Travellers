import React, { useEffect, useState } from "react";

const TotalBookings = () => {
  const [bookings, setBookings] = useState([]);
  // const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <div>
        <h1>Total Bookings {bookings.length}</h1>
      </div>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Views</th>
            </tr>
          </thead>
          {bookings?.map((pd, index) => (
            <tbody key={index}>
              <tr className="bg-emerald-200">
                <td>{pd.title}</td>
                <td>{pd.email}</td>
                <td>{pd.date}</td>
                <td>{pd.status}</td>

                <td>{pd.description}</td>
                {/* <td>
                <Button onClick={() => handleDelete(pd._id)}>Delete</Button>
              </td> */}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TotalBookings;
