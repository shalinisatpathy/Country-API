import React from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { Country } from '../types'
import MuiTableBody from '@mui/material/TableBody'
import { useDispatch } from 'react-redux'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'
import { addFavorite } from '../redux/action/favoriteA'
import { Button } from '@mui/material'

export type TableBodyTypes = {
  filteredCountries: Country[]
}

function TableBody({ filteredCountries }: TableBodyTypes) {
  const dispatch = useDispatch()

  const addToFavorite = (countryName: string) => {
    dispatch(addFavorite(countryName))
  }

  return (
    <MuiTableBody sx={{ maxHeight: 440 }}>
      {filteredCountries.map((country: Country) => (
        <TableRow
          key={country.name.common}
          sx={{
            '&:last-child td, &:last-child th': {
              border: 0,
            },
            '& td': {
              color: 'inherit',
            },
            '& a': {
              color: 'inherit',
            },
          }}
        >
          <TableCell>
            <img src={country.flags.png} style={{ width: '80px' }} alt="flag" />
          </TableCell>
          <TableCell>
            <Link to={`/country/${country.name.common}`}>
              {country.name.common}
            </Link>
          </TableCell>
          <TableCell>{country.capital}</TableCell>
          <TableCell>{country.region}</TableCell>
          <TableCell>{country.population}</TableCell>
          <TableCell>
            <Button
              onClick={() => {
                addToFavorite(country.name.common)
              }}
            >
              <FavoriteBorderIcon />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </MuiTableBody>
  )
}

export default TableBody
