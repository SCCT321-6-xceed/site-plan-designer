import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(2),
    backgroundColor: "#93cb40",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.light,
      border: "1px solid #ece7e7",
    },
  },
}));

const GST = 0.1;

function dollar(num) {
  return `${num.toFixed(2)}`;
}

function pricerow(quantity, unitprice) {
  return quantity * unitprice;
}

function createRow(itemdesc, quantity, unit) {
  const price = pricerow(quantity, unit);
  return { itemdesc, quantity, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("LED down lights", 50, 2),
  createRow("Switch", 20, 10),
  createRow("Power point", 15, 7.5),
  createRow("Light Sensor", 4, 20),
  createRow("Main Switchboard", 1, 50)
];

const invoiceSubtotal = subtotal(rows);
const invoiceTax = GST * invoiceSubtotal;
const invoiceTotal = invoiceTax + invoiceSubtotal;

function ExportTable() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 500 }}
          aria-label="Spanning table"
          style={{ backgroundColor: "#f9f9f9", }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <Typography variant="h5">Invoice</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Typography variant="h6">Item Description</Typography></TableCell>
              <TableCell align="right"><Typography variant="h6">Quantity</Typography></TableCell>
              <TableCell align="right"><Typography variant="h6">Price</Typography></TableCell>
              <TableCell align="right"><Typography variant="h6">Sum</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.itemdesc}>
                <TableCell>{row.itemdesc}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{dollar(row.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{dollar(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>GST</TableCell>
              <TableCell align="right">{`${(GST * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{dollar(invoiceTax)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{dollar(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ExportTable;
