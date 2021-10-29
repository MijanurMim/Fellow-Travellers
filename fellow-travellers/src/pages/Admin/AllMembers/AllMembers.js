import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";

const AllMembers = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allMembers")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div>
      <h1>This is All Members : {members.length}</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          {members?.map((pd, index) => (
            <TableBody>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {pd.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {pd.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {pd.date}
              </TableCell>
              <TableCell>
                <Button>Delete</Button>
              </TableCell>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllMembers;
