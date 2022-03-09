import React from 'react'
import { Link } from 'react-router-dom'

import DeleteIcon from '@mui/icons-material/Delete'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
//import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import HomeIcon from '@mui/icons-material/Home'

import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../redux/action/favoriteA'

import country from '../country/countryindex'
import { InitialAllState } from '../redux/store'

function Favorites() {
  const dispatch = useDispatch()
  const favoriteCountriesList = useSelector(
    (state: InitialAllState) => state.favCountries.favoriteCountries
  )

  const removeFromFavorite = (countryName: string) => {
    dispatch(removeFavorite(countryName))
  }

  if (!country) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1> Countries listed in the Favorites</h1>
      <Link to="/">
        <HomeIcon />
      </Link>

      <p></p>

      <TableContainer component={Paper}>
        <div>
          <Table
            sx={{ Width: 400, margin: 'auto' }}
            size="small"
            aria-label="simple table"
          >
            {favoriteCountriesList.length === 0 && (
              <p>
                No items are listed as Favorite Countries
                <p>Click on home for listing favorites</p>
              </p>
            )}
            <TableBody>
              {favoriteCountriesList.map(country => (
                <TableRow key={country}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    style={{ width: 700 }}
                    colSpan={1}
                  >
                    {country}
                  </TableCell>

                  <TableCell>
                    <DeleteIcon onClick={() => removeFromFavorite(country)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  )
}

export default Favorites

//function state(state: any, InitialState: any) {
//  throw new Error ('Function not implemented.')
//}
