import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import numeral from "numeral";
import { useMemo } from "react";
import Typography from "@mui/material/Typography";

import { useAppSelector } from "../../redux/hooks";

export const MyCartSubTotal = () => {
  const { items } = useAppSelector((state) => state.cart);

  const totalAmount = useMemo(() => {
    return items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.unitPrice; // @TODO multiply by quantity
    }, 0);
  }, [items]);

  return (
    <Box sx={{ padding: 2 }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <Typography sx={{ fontWeight: "bold" }}>Total Items:</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography sx={{ fontWeight: "bold" }}>
                {items.length}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              <Typography sx={{ fontWeight: "bold" }}>Total Amount:</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                ₱ {numeral(totalAmount).format("0,0.00")}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
