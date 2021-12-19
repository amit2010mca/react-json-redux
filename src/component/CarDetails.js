import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import yes from "../images/yes.png";
import no from "../images/no.png";
import { Margin } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CarDetails = (props) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const filteredData = props.filteredCarsData;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    props.isCarInfoVisible && (
      <>
        <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
          <Table
            aria-label="customized table"
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">S.No</StyledTableCell>
                <StyledTableCell align="center">Car</StyledTableCell>
                <StyledTableCell align="center">Car Model</StyledTableCell>
                <StyledTableCell align="center">Car Color</StyledTableCell>
                <StyledTableCell align="center">Car Model Year</StyledTableCell>
                <StyledTableCell align="center">Car VIN</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Availability</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {props.isCarInfoVisible &&
                props.carsData &&
                filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell align="center">{row.id}</StyledTableCell>
                      <StyledTableCell align="center">
                        {row.car}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.car_model}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.car_color}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.car_model_year}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.car_vin}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.price}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {String(row.availability) === "true" ? (
                          <img src={yes} width="25" />
                        ) : (
                          <img src={no} width="25" />
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    )
  );
};

export default CarDetails;
