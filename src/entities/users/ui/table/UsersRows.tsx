import {TableCell, TableRow} from "@mui/material";
import type {User} from "../../types.ts";

export const UsersRows = ({row}: { row: User }) => {
  return (
    <TableRow hover className="hover:bg-indigo-50 transition duration-150">
      <TableCell className="font-medium text-gray-700 w-12">{row.id}</TableCell>
      <TableCell className="font-semibold text-gray-800 whitespace-nowrap">
        {row.firstName}&nbsp;{row.lastName}
      </TableCell>
      <TableCell className="text-gray-600">{row.email}</TableCell>
      <TableCell className="text-gray-600">{row.role}</TableCell>
      <TableCell className="text-gray-600">{row.birthDate}</TableCell>
      <TableCell className="text-gray-600">{row.weight}</TableCell>
      <TableCell className="text-gray-600">{row.height}</TableCell>
    </TableRow>
  )
}