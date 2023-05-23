import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';


const MyTable = (props: any) => {
    const { data, onDelete } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* Assuming your data object keys as columns */}
            {Object.keys(data[0]).map(key => <TableCell key={key}>{key.toUpperCase()}</TableCell>)}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:any) => (
            <TableRow key={row.id}>
              {/* Loop over the properties in each row object */}
              {Object.values(row).map((value:any, i) => <TableCell key={i}>{value}</TableCell>)}
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => onDelete(row.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;
