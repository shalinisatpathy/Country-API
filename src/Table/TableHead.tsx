import React from 'react'

import MuiTableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

function TableHead() {
  return (
    <>
      <MuiTableHead>
        <TableRow>
          <TableCell>Flag</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Capital</TableCell>
          <TableCell>Region</TableCell>
          <TableCell>Population</TableCell>
          <TableCell>Favorite</TableCell>
        </TableRow>
      </MuiTableHead>
    </>
  )
}

export default TableHead
