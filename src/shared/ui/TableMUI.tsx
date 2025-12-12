import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import * as React from "react";

type Props = {
  header: string[];
  rows: React.ReactNode;
  pagination?: React.ReactNode;
}

export const TableMUI = ({header, rows, pagination}: Props) => {
  return (
    <>
      <TableContainer sx={{maxHeight: "400px"}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {header.map((title) => (
                <TableCell key={title}>
                  <Typography variant="subtitle1">{title}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>

      {pagination}
    </>
  )
}