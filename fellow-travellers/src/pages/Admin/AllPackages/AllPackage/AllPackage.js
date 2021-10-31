import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import React from "react";

const AllPackage = ({ pd, handleDelete }) => {
  const { title, date, status, email } = pd;
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        {/* <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell align="right">Email</TableCell>
        <TableCell align="right">Date</TableCell>
        <TableCell align="right">Status</TableCell>
        <TableCell align="right">Action</TableCell>
      </TableRow>
    </TableHead> */}
        <TableBody>
          <TableRow
            key={title}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            color="primary"
          >
            <TableCell component="th" scope="row">
              {title}
            </TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{date}</TableCell>
            <TableCell align="right">{status}</TableCell>
            <TableCell align="right">
              <Button onClick={() => handleDelete(pd._id)} variant="contained">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllPackage;
